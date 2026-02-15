import type { BlogPost, BlogCategory } from '../lib/supabase';

const STATIC_CATEGORIES: BlogCategory[] = [
  { id: 'static-conseils', name: 'Conseils', slug: 'conseils', description: 'Conseils pratiques pour vos voyages en autocar', created_at: '' },
  { id: 'static-destinations', name: 'Destinations', slug: 'destinations', description: 'Découvrez les destinations que nous desservons', created_at: '' },
];

const now = new Date().toISOString();
const yesterday = new Date(Date.now() - 86400000).toISOString();

export const STATIC_BLOG_POSTS: BlogPost[] = [
  {
    id: 'static-location-autocar-bruxelles',
    title: 'Location autocar Bruxelles',
    slug: 'location-autocar-bruxelles',
    excerpt: 'Louez un autocar ou un minibus avec chauffeur à Bruxelles. Transport de groupe pour entreprises, associations et particuliers. Devis gratuit sous 48 h.',
    content: `# Location autocar Bruxelles

Vous cherchez une **location d'autocar à Bruxelles** pour un déplacement de groupe ? Autocaravecchauffeur met à votre disposition une flotte moderne et des chauffeurs professionnels pour tous vos trajets au départ de la capitale belge.

## Pourquoi louer un autocar à Bruxelles ?

Que ce soit pour une entreprise (séminaire, congrès), une école (sortie, voyage) ou un événement (mariage, anniversaire), l'autocar avec chauffeur au départ de Bruxelles reste la solution la plus pratique et économique. Nous proposons des véhicules de 2 à 63 places, équipés de climatisation et conformes à la zone basse émission (LEZ) de Bruxelles.

Consultez [nos services de transport de groupe](https://autocaravecchauffeur.be/services) pour découvrir toutes nos formules. Vous pouvez aussi demander un [devis gratuit sur notre page tarifs](https://autocaravecchauffeur.be/tarifs) adapté à votre itinéraire.

## Bruxelles, point de départ idéal

Bruxelles est au cœur de l'Europe et constitue un point de départ parfait pour des excursions en Belgique ou vers les pays limitrophes. Pour préparer votre programme, le site [Visit Brussels](https://www.visit.brussels/) propose de nombreuses idées de visites et d'activités. La [Ville de Bruxelles](https://www.bruxelles.be/) met également à disposition des informations pratiques sur les infrastructures et la circulation.

## Réservez votre autocar au départ de Bruxelles

Notre équipe est disponible 7j/7 pour votre devis et pour organiser votre transport. Contactez-nous pour une location d'autocar ou de minibus avec chauffeur à Bruxelles : devis gratuit, réservation simple. Entreprises, écoles, événements.`,
    featured_image_url: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Autocaravecchauffeur',
    status: 'published',
    published_at: now,
    created_at: now,
    updated_at: now,
    categories: [STATIC_CATEGORIES[0], STATIC_CATEGORIES[1]],
  },
  {
    id: 'static-location-autocar-bruxelles-excursion',
    title: 'Location autocar Bruxelles pour excursion',
    slug: 'location-autocar-bruxelles-excursion',
    excerpt: 'Organisez vos excursions en autocar au départ de Bruxelles. Sorties scolaires, voyages associatifs, circuits touristiques en Belgique et en Europe. Chauffeur professionnel inclus.',
    content: `# Location autocar Bruxelles pour excursion

Une **excursion en autocar au départ de Bruxelles** permet de découvrir la Belgique et ses environs en toute sérénité. Autocaravecchauffeur accompagne les groupes pour des sorties d'une journée ou des séjours plus longs, avec un chauffeur expérimenté et un véhicule confortable.

## Excursions populaires au départ de Bruxelles

- Bruges, Gand, Anvers, Liège ou les Ardennes au départ de Bruxelles : nous adaptons l'itinéraire et le véhicule à votre effectif. Véhicules conformes LEZ.
- Écoles (sorties, voyages), entreprises (séminaires) et événements : notre [page services](https://autocaravecchauffeur.be/services) détaille les options (WiFi, climatisation, bagages).
- Devis gratuit : consultez notre [page tarifs](https://autocaravecchauffeur.be/tarifs). Équipe disponible 7j/7 pour réserver votre autocar avec chauffeur à Bruxelles.

## S'informer sur Bruxelles et la Belgique

Avant ou après votre excursion, [Visit Brussels](https://www.visit.brussels/) vous donne des idées de visites et d'activités dans la capitale. Pour des infos plus larges sur la Belgique, le portail [Belgium the place to be](https://www.belgiumtheplaceto.be/) propose des suggestions de destinations et d'événements.

## Réservez votre excursion en autocar

Que vous partiez de Bruxelles pour une journée à Bruges ou pour un circuit de plusieurs jours, nous vous proposons une location d'autocar avec chauffeur adaptée à votre groupe. Demandez votre devis gratuit et précisez votre date, votre effectif et votre destination.`,
    featured_image_url: 'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Autocaravecchauffeur',
    status: 'published',
    published_at: yesterday,
    created_at: yesterday,
    updated_at: yesterday,
    categories: [STATIC_CATEGORIES[0], STATIC_CATEGORIES[1]],
  },
];

export const STATIC_BLOG_CATEGORIES = STATIC_CATEGORIES;
