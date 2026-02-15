/*
  # Create Blog System Tables

  ## Overview
  This migration creates a complete blog system with posts, categories, and their relationships.
  All tables are secured with Row Level Security (RLS) to ensure data safety.

  ## New Tables Created

  ### 1. blog_categories
  Categories for organizing blog posts (e.g., "Actualités", "Conseils", "Événements")
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text, unique) - Category name in French
  - `slug` (text, unique) - URL-friendly version of the name
  - `description` (text, optional) - Category description
  - `created_at` (timestamptz) - When the category was created

  ### 2. blog_posts
  Main blog posts table containing all article content
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Post title
  - `slug` (text, unique) - URL-friendly version for routing
  - `excerpt` (text) - Short summary for previews
  - `content` (text) - Full article content
  - `featured_image_url` (text, optional) - URL to header image
  - `author` (text) - Author name
  - `status` (text) - Publication status: 'draft' or 'published'
  - `published_at` (timestamptz, optional) - When post was published
  - `created_at` (timestamptz) - When post was created
  - `updated_at` (timestamptz) - Last modification time

  ### 3. blog_post_categories
  Junction table for many-to-many relationship between posts and categories
  - `id` (uuid, primary key) - Unique identifier
  - `post_id` (uuid, foreign key) - Reference to blog_posts
  - `category_id` (uuid, foreign key) - Reference to blog_categories
  - `created_at` (timestamptz) - When relationship was created

  ## Security
  - RLS is enabled on all tables
  - Public read access for published posts and all categories
  - Full access for authenticated admin users (future enhancement)

  ## Performance
  - Indexes on slug fields for fast lookups
  - Index on published_at for chronological sorting
  - Index on status for filtering published posts
*/

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image_url text,
  author text NOT NULL DEFAULT 'Autocaravecchauffeur',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create junction table for posts and categories
CREATE TABLE IF NOT EXISTS blog_post_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  category_id uuid NOT NULL REFERENCES blog_categories(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(post_id, category_id)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);
CREATE INDEX IF NOT EXISTS idx_blog_post_categories_post_id ON blog_post_categories(post_id);
CREATE INDEX IF NOT EXISTS idx_blog_post_categories_category_id ON blog_post_categories(category_id);

-- Enable Row Level Security
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_categories ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog_categories
-- Anyone can view categories
CREATE POLICY "Categories are viewable by everyone"
  ON blog_categories FOR SELECT
  TO public
  USING (true);

-- RLS Policies for blog_posts
-- Anyone can view published posts
CREATE POLICY "Published posts are viewable by everyone"
  ON blog_posts FOR SELECT
  TO public
  USING (status = 'published');

-- RLS Policies for blog_post_categories
-- Anyone can view post-category relationships for published posts
CREATE POLICY "Post categories are viewable for published posts"
  ON blog_post_categories FOR SELECT
  TO public
  USING (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE blog_posts.id = blog_post_categories.post_id
      AND blog_posts.status = 'published'
    )
  );

-- Insert some default categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Actualités', 'actualites', 'Les dernières nouvelles et mises à jour de notre entreprise'),
  ('Conseils', 'conseils', 'Conseils pratiques pour vos voyages en autocar'),
  ('Événements', 'evenements', 'Couverture des événements et sorties spéciales'),
  ('Destinations', 'destinations', 'Découvrez les destinations que nous desservons')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample blog posts for demonstration
INSERT INTO blog_posts (title, slug, excerpt, content, featured_image_url, author, status, published_at) VALUES
  (
    'Bienvenue sur notre nouveau blog',
    'bienvenue-sur-notre-nouveau-blog',
    'Nous sommes ravis de lancer notre blog pour partager avec vous nos actualités, conseils et histoires de voyage.',
    E'# Bienvenue sur notre nouveau blog !\n\nNous sommes heureux de vous accueillir sur le blog d''Autocaravecchauffeur. Ce nouvel espace a été créé pour partager avec vous nos actualités, nos conseils de voyage, et toutes les informations utiles concernant nos services de transport de groupe.\n\n## Que trouverez-vous ici ?\n\nSur ce blog, vous découvrirez :\n- **Des actualités** sur notre flotte et nos services\n- **Des conseils pratiques** pour organiser vos voyages de groupe\n- **Des récits d''événements** que nous avons eu le plaisir d''accompagner\n- **Des informations** sur les destinations en Belgique et en Europe\n\n## Notre engagement\n\nDepuis notre création, nous nous engageons à offrir un service de qualité supérieure avec une flotte moderne et des chauffeurs expérimentés. Ce blog est une extension naturelle de notre volonté de vous accompagner au mieux dans tous vos projets de déplacement.\n\n## Restez connectés\n\nN''hésitez pas à consulter régulièrement notre blog pour ne rien manquer de nos nouveautés. Nous publierons régulièrement du contenu pour vous informer et vous inspirer dans l''organisation de vos voyages.\n\nÀ très bientôt sur les routes de Belgique et d''Europe !\n\nL''équipe Autocaravecchauffeur',
    'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'Autocaravecchauffeur',
    'published',
    now()
  ),
  (
    'Comment choisir le bon autocar pour votre événement',
    'comment-choisir-le-bon-autocar',
    'Découvrez nos conseils pour sélectionner le véhicule parfaitement adapté à vos besoins de transport de groupe.',
    E'# Comment choisir le bon autocar pour votre événement ?\n\nLe choix du véhicule adapté est crucial pour le succès de votre événement. Voici nos conseils pour faire le bon choix.\n\n## 1. Évaluez le nombre de passagers\n\nLa première étape consiste à déterminer précisément le nombre de participants. Notre flotte peut accueillir de 2 à 63 passagers :\n- **Minibus** : de 2 à 19 passagers\n- **Autocars moyens** : de 20 à 35 passagers\n- **Grands autocars** : de 36 à 63 passagers\n\n## 2. Considérez la distance du trajet\n\nPour les trajets courts en ville, un minibus peut suffire. Pour les longues distances, privilégiez nos autocars équipés de tout le confort nécessaire :\n- Sièges inclinables\n- Climatisation\n- Toilettes à bord (selon modèle)\n- Espaces de rangement pour bagages\n\n## 3. Type d''événement\n\nSelon la nature de votre événement, certains véhicules seront plus appropriés :\n- **Événements d''entreprise** : autocars haut de gamme avec équipements modernes\n- **Sorties scolaires** : véhicules spacieux et sécurisés\n- **Mariages** : autocars élégants pour un transport raffiné\n- **Excursions touristiques** : autocars tout confort avec grandes baies vitrées\n\n## 4. Budget et services inclus\n\nNos tarifs sont transparents et incluent :\n- Le carburant\n- Les péages\n- L''assurance\n- Un chauffeur professionnel expérimenté\n\n## Besoin de conseils ?\n\nNotre équipe est disponible 7j/7 et 24h/24 pour vous aider à choisir le véhicule idéal. N''hésitez pas à nous contacter pour discuter de votre projet !',
    'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'Autocaravecchauffeur',
    'published',
    now() - interval '2 days'
  ),
  (
    'Les meilleures destinations pour vos sorties de groupe en Belgique',
    'meilleures-destinations-belgique',
    'De Bruges à Liège, découvrez les destinations incontournables pour vos excursions en autocar au départ de Bruxelles.',
    E'# Les meilleures destinations pour vos sorties de groupe en Belgique\n\nLa Belgique regorge de destinations magnifiques, parfaites pour des sorties de groupe. Voici notre sélection des lieux incontournables.\n\n## 1. Bruges - La Venise du Nord\n\nBruges est sans conteste l''une des plus belles villes de Belgique. Ses canaux pittoresques, son architecture médiévale et ses chocolateries renommées en font une destination idéale pour une journée d''excursion.\n\n**Temps de trajet depuis Bruxelles** : environ 1h30\n\n## 2. Gand - La perle de Flandre\n\nGand allie parfaitement patrimoine historique et dynamisme moderne. La ville offre de nombreux musées, une vie culturelle riche et une gastronomie exceptionnelle.\n\n**Temps de trajet depuis Bruxelles** : environ 1h\n\n## 3. Anvers - Le diamant flamand\n\nAnvers, capitale mondiale du diamant, séduit par son port animé, sa cathédrale majestueuse et ses musées de renommée internationale.\n\n**Temps de trajet depuis Bruxelles** : environ 50 minutes\n\n## 4. Liège - La cité ardente\n\nLiège, avec son célèbre perron, ses marchés authentiques et sa convivialité légendaire, offre une expérience unique aux visiteurs.\n\n**Temps de trajet depuis Bruxelles** : environ 1h30\n\n## 5. Les Ardennes - Nature et aventure\n\nPour les amateurs de nature, les Ardennes proposent des paysages magnifiques, des activités de plein air et des villages pittoresques.\n\n**Temps de trajet depuis Bruxelles** : de 1h30 à 2h30 selon la destination\n\n## Organisez votre excursion avec nous\n\nQuelle que soit votre destination, Autocaravecchauffeur vous accompagne avec professionnalisme. Nos chauffeurs connaissent parfaitement les routes et pourront vous conseiller sur les meilleurs itinéraires.\n\nContactez-nous pour organiser votre prochaine sortie de groupe !',
    'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'Autocaravecchauffeur',
    'published',
    now() - interval '5 days'
  )
ON CONFLICT (slug) DO NOTHING;

-- Link sample posts to categories
INSERT INTO blog_post_categories (post_id, category_id)
SELECT 
  bp.id,
  bc.id
FROM blog_posts bp
CROSS JOIN blog_categories bc
WHERE 
  (bp.slug = 'bienvenue-sur-notre-nouveau-blog' AND bc.slug = 'actualites')
  OR (bp.slug = 'comment-choisir-le-bon-autocar' AND bc.slug = 'conseils')
  OR (bp.slug = 'meilleures-destinations-belgique' AND bc.slug IN ('destinations', 'conseils'))
ON CONFLICT (post_id, category_id) DO NOTHING;