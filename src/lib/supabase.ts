import { createClient } from '@supabase/supabase-js';

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
  if (!hasValidConfig) {
    console.warn('Supabase not configured. Returning empty posts array.');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!hasValidConfig) {
    console.warn('Supabase not configured. Returning null.');
    return null;
  }

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
  if (!hasValidConfig) {
    console.warn('Supabase not configured. Returning empty categories array.');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error fetching categories:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function fetchPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  if (!hasValidConfig) {
    console.warn('Supabase not configured. Returning empty posts array.');
    return [];
  }

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

    if (error) {
      console.error('Error fetching posts by category:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}
