import { createClient } from '@supabase/supabase-js';
import { STATIC_BLOG_POSTS, STATIC_BLOG_CATEGORIES } from '../data/staticBlogPosts';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYwNjg0MDAsImV4cCI6MTk2MTY0NDQwMH0.placeholder';

const hasValidConfig = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!hasValidConfig) {
  console.warn('⚠️ Supabase environment variables are missing. Database features will be disabled.');
  console.warn('To enable database features, add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const isSupabaseConfigured = () => hasValidConfig;

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url: string | null;
  author: string;
  status: 'draft' | 'published';
  published_at: string | null;
  created_at: string;
  updated_at: string;
  categories?: BlogCategory[];
}

export async function fetchPublishedPosts(): Promise<BlogPost[]> {
  if (hasValidConfig) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (!error && data?.length) {
        const dbSlugs = new Set(data.map((p) => p.slug));
        const staticOnly = STATIC_BLOG_POSTS.filter((p) => !dbSlugs.has(p.slug));
        const merged = [...data, ...staticOnly].sort(
          (a, b) => new Date(b.published_at || 0).getTime() - new Date(a.published_at || 0).getTime()
        );
        return merged;
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  return [...STATIC_BLOG_POSTS].sort(
    (a, b) => new Date(b.published_at || 0).getTime() - new Date(a.published_at || 0).getTime()
  );
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const staticPost = STATIC_BLOG_POSTS.find((p) => p.slug === slug);
  if (staticPost) return staticPost;

  if (!hasValidConfig) return null;

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        blog_post_categories (
          category_id,
          blog_categories (*)
        )
      `)
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle();

    if (error) {
      console.error('Error fetching post:', error);
      return null;
    }

    if (!data) return null;

    const categories = data.blog_post_categories?.map(
      (pc: { blog_categories: BlogCategory }) => pc.blog_categories
    ) || [];

    return {
      ...data,
      categories,
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function fetchCategories(): Promise<BlogCategory[]> {
  if (hasValidConfig) {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');

      if (!error && data?.length) {
        const dbSlugs = new Set(data.map((c) => c.slug));
        const staticOnly = STATIC_BLOG_CATEGORIES.filter((c) => !dbSlugs.has(c.slug));
        return [...data, ...staticOnly];
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }
  return [...STATIC_BLOG_CATEGORIES];
}

export async function fetchPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const staticInCategory = STATIC_BLOG_POSTS.filter((p) =>
    p.categories?.some((c) => c.slug === categorySlug)
  );
  if (hasValidConfig) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          blog_post_categories!inner (
            blog_categories!inner (slug)
          )
        `)
        .eq('status', 'published')
        .eq('blog_post_categories.blog_categories.slug', categorySlug)
        .order('published_at', { ascending: false });

      if (!error && data?.length) {
        const dbSlugs = new Set(data.map((p) => p.slug));
        const staticOnly = staticInCategory.filter((p) => !dbSlugs.has(p.slug));
        return [...data, ...staticOnly].sort(
          (a, b) => new Date(b.published_at || 0).getTime() - new Date(a.published_at || 0).getTime()
        );
      }
    } catch (error) {
      console.error('Error fetching posts by category:', error);
    }
  }
  return [...staticInCategory].sort(
    (a, b) => new Date(b.published_at || 0).getTime() - new Date(a.published_at || 0).getTime()
  );
}
