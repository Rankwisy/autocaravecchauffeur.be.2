import { useState, useEffect } from 'react';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchPublishedPosts, fetchCategories, fetchPostsByCategory, BlogPost, BlogCategory } from '../lib/supabase';
import SEO from '../components/SEO';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Autocaravecchauffeur",
    "description": "Actualités, conseils et guides sur le transport de groupe en autocar",
    "url": "https://autocaravecchauffeur.be/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Autocaravecchauffeur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/apple-touch-icon.png?updatedAt=1759666614409"
      }
    }
  };

  useEffect(() => {
    loadData();
  }, [selectedCategory]);

  const loadData = async () => {
    setLoading(true);
    const [postsData, categoriesData] = await Promise.all([
      selectedCategory ? fetchPostsByCategory(selectedCategory) : fetchPublishedPosts(),
      fetchCategories(),
    ]);
    setPosts(postsData);
    setCategories(categoriesData);
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

  const handleCategoryFilter = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
    setSearchQuery('');
  };

  const filteredPosts = posts.filter((post) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <SEO
        title="Blog Transport Groupe & Autocar - Actualités & Conseils | Autocaravecchauffeur"
        description="Découvrez nos articles sur le transport de groupe, excursions en autocar, conseils de voyage et actualités du secteur. Guide complet pour organiser vos déplacements en Belgique."
        canonicalUrl="https://autocaravecchauffeur.be/blog"
        structuredData={structuredData}
      />
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Notre Blog</h1>
          <div className="w-24 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Actualités, conseils et récits de voyage pour vos déplacements en autocar
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => handleCategoryFilter(null)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === null
                    ? 'bg-lime-400 text-black shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                Tous les articles
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryFilter(category.slug)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.slug
                      ? 'bg-lime-400 text-black shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                {searchQuery
                  ? 'Aucun article ne correspond à votre recherche.'
                  : 'Aucun article publié pour le moment.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 group cursor-pointer"
                >
                  <article>
                  {post.featured_image_url && (
                    <div className="h-56 overflow-hidden">
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-lime-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center space-x-2 text-lime-600 font-semibold group-hover:text-lime-700">
                      <span>Lire la suite</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
