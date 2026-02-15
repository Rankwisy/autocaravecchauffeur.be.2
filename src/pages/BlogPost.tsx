import { useState, useEffect } from 'react';
import { Calendar, Tag, ArrowLeft, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { fetchPostBySlug, BlogPost as BlogPostType } from '../lib/supabase';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (slug) loadPost(slug);
    else setLoading(false);
  }, [slug]);

  const loadPost = async (postSlug: string) => {
    setLoading(true);
    setError(false);
    const data = await fetchPostBySlug(postSlug);
    if (data) {
      setPost(data);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min de lecture`;
  };

  const parseInlineContent = (text: string, keyPrefix: string) => {
    const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*/g;
    const nodes: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    while ((match = re.exec(text)) !== null) {
      if (match.index > lastIndex) {
        nodes.push(text.slice(lastIndex, match.index));
      }
      if (match[1] !== undefined) {
        const url = match[2];
        const isInternal = url.startsWith('https://autocaravecchauffeur.be') || url.startsWith('/');
        nodes.push(
          <a
            key={`${keyPrefix}-${match.index}`}
            href={url}
            target={isInternal ? '_self' : '_blank'}
            rel={isInternal ? undefined : 'noopener noreferrer'}
            className="text-lime-600 underline hover:text-lime-700"
          >
            {match[1]}
          </a>
        );
      } else {
        nodes.push(
          <strong key={`${keyPrefix}-${match.index}`} className="font-bold text-gray-900">
            {match[3]}
          </strong>
        );
      }
      lastIndex = re.lastIndex;
    }
    if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
    return nodes.length === 1 ? nodes[0] : nodes;
  };

  const formatContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 mt-8">
            {line.substring(2)}
          </h1>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 mt-8">
            {line.substring(3)}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 mt-6">
            {line.substring(4)}
          </h3>
        );
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4 font-bold">
            {line.substring(2, line.length - 2)}
          </p>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-lg text-gray-700 leading-relaxed mb-2 ml-6">
            {parseInlineContent(line.substring(2), `li-${index}`)}
          </li>
        );
      }
      if (line.trim() === '') {
        return <div key={index} className="h-4"></div>;
      }

      return (
        <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4">
          {parseInlineContent(line, `p-${index}`)}
        </p>
      );
    });
  };

  if (!slug) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/blog" className="bg-lime-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-lime-300 inline-flex items-center space-x-2 mx-auto">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour au blog</span>
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <p className="text-xl text-gray-600 mb-8">
            L'article que vous recherchez n'existe pas ou n'est plus disponible.
          </p>
          <Link
            to="/blog"
            className="bg-lime-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-lime-300 transition-all inline-flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour au blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://autocaravecchauffeur.be/blog/${post.slug}`;
  const seoTitle =
    (post.title.length > 42 ? post.title.slice(0, 39) + '…' : post.title) + ' | Autocar Bruxelles';
  const seoDescription =
    post.excerpt.length > 155 ? post.excerpt.slice(0, 152) + '…' : post.excerpt;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image_url || undefined,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Autocaravecchauffeur' },
    datePublished: post.published_at || undefined,
  };

  return (
    <div>
      <SEO
        title={seoTitle.length > 60 ? seoTitle.slice(0, 57) + '…' : seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        ogType="article"
        ogImage={post.featured_image_url || undefined}
        structuredData={structuredData}
      />
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-lime-400 hover:text-lime-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Retour au blog</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.published_at)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{estimateReadingTime(post.content)}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category.id}
                  className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-semibold"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {post.featured_image_url && (
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={post.featured_image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </section>
      )}

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-600 leading-relaxed mb-8 pb-8 border-b-2 border-gray-200">
              {post.excerpt}
            </div>
            <div className="blog-content">
              {formatContent(post.content)}
            </div>
          </div>
        </div>
      </article>

      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-lime-400 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Besoin de nos services ?
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Contactez-nous pour un devis personnalisé et sans engagement
            </p>
            <Link
              to="/contact"
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg inline-block"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
