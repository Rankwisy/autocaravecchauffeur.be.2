import { createClient } from '@supabase/supabase-js';
import { STATIC_BLOG_POSTS, STATIC_BLOG_CATEGORIES } from '../data/staticBlogPosts';

const supabaseUrl =
  import.meta.env.PUBLIC_SUPABASE_URL ||
  import.meta.env.VITE_SUPABASE_URL ||
  'https://placeholder.supabase.co';
const supabaseAnonKey =
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYwNjg0MDAsImV4cCI6MTk2MTY0NDQwMH0.placeholder';

const hasValidConfig =
  (import.meta.env.PUBLIC_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL) &&
  (import.meta.env.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

export interface VehicleCategory {
  id: string;
  name: string;
  description: string;
  capacity_min: number;
  capacity_max: number;
  display_order?: number;
}

export interface PricingOption {
  id: string;
  category_id: string;
  service_type: string;
  duration_type: string;
  base_price: number;
  price_description: string | null;
  includes: string[] | null;
  display_order?: number;
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
        const dbSlugs = new Set(data.map((p: BlogPost) => p.slug));
        const staticOnly = STATIC_BLOG_POSTS.filter((p) => !dbSlugs.has(p.slug));
        const merged = [...data, ...staticOnly].sort(
          (a, b) =>
            new Date(b.published_at || 0).getTime() - new Date(a.published_at || 0).getTime()
        );
        return merged;
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  return [...STATIC_BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.published_at || 0).getTime() - new Date(a.published_at || 0).getTime()
  );
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const staticPost = STATIC_BLOG_POSTS.find((p) => p.slug === slug);
  if (staticPost) return staticPost;

  if (!hasValidConfig) return null;

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(
        `
        *,
        blog_post_categories (
          category_id,
          blog_categories (*)
        )
      `
      )
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle();

    if (error) {
      console.error('Error fetching post:', error);
      return null;
    }

    if (!data) return null;

    const categories =
      data.blog_post_categories?.map(
        (pc: { blog_categories: BlogCategory }) => pc.blog_categories
      ) || [];

    return { ...data, categories };
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
        const dbSlugs = new Set(data.map((c: BlogCategory) => c.slug));
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
        .select(
          `
          *,
          blog_post_categories!inner (
            blog_categories!inner (slug)
          )
        `
        )
        .eq('status', 'published')
        .eq('blog_post_categories.blog_categories.slug', categorySlug)
        .order('published_at', { ascending: false });

      if (!error && data?.length) {
        const dbSlugs = new Set(data.map((p: BlogPost) => p.slug));
        const staticOnly = staticInCategory.filter((p) => !dbSlugs.has(p.slug));
        return [...data, ...staticOnly].sort(
          (a, b) =>
            new Date(b.published_at || 0).getTime() - new Date(a.published_at || 0).getTime()
        );
      }
    } catch (error) {
      console.error('Error fetching posts by category:', error);
    }
  }
  return [...staticInCategory].sort(
    (a, b) =>
      new Date(b.published_at || 0).getTime() - new Date(a.published_at || 0).getTime()
  );
}

export async function fetchPricingData(): Promise<{
  categories: VehicleCategory[];
  pricingOptions: PricingOption[];
}> {
  const categories: VehicleCategory[] = [];
  const pricingOptions: PricingOption[] = [];

  if (hasValidConfig) {
    try {
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('vehicle_categories')
        .select('*')
        .order('display_order');

      if (!categoriesError && categoriesData) {
        categories.push(...categoriesData);
      }

      const { data: pricingData, error: pricingError } = await supabase
        .from('pricing_options')
        .select('*')
        .order('display_order');

      if (!pricingError && pricingData) {
        pricingOptions.push(...pricingData);
      }
    } catch (error) {
      console.error('Error fetching pricing data:', error);
    }
  }

  return { categories, pricingOptions };
}
