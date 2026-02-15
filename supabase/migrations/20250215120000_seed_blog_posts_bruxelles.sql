-- Two blog posts in French (BE) for Brussels: location autocar and location autocar pour excursion
-- Each post has 2 internal links (autocaravecchauffeur.be) and 2 outbound links (Belgian/Brussels sites).

INSERT INTO blog_posts (title, slug, excerpt, content, featured_image_url, author, status, published_at) VALUES
  (
    'Location autocar Bruxelles',
    'location-autocar-bruxelles',
    'Louez un autocar ou un minibus avec chauffeur à Bruxelles. Transport de groupe pour entreprises, associations et particuliers. Devis gratuit sous 48 h.',
    E'# Location autocar Bruxelles\n\nVous cherchez une **location d''autocar à Bruxelles** pour un déplacement de groupe ? Autocaravecchauffeur met à votre disposition une flotte moderne et des chauffeurs professionnels pour tous vos trajets au départ de la capitale belge.\n\n## Pourquoi louer un autocar à Bruxelles ?\n\nQue ce soit pour un séminaire, un événement d''entreprise, une sortie associative ou un transfert groupe, l''autocar reste la solution la plus pratique et économique depuis Bruxelles. Nous proposons des véhicules de 2 à 63 places, tous équipés de climatisation et conformes aux normes en vigueur.\n\nConsultez [nos services de transport de groupe](https://autocaravecchauffeur.be/services) pour découvrir toutes nos formules. Vous pouvez aussi demander un [devis gratuit sur notre page tarifs](https://autocaravecchauffeur.be/tarifs) adapté à votre itinéraire.\n\n## Bruxelles, point de départ idéal\n\nBruxelles est au cœur de l''Europe et constitue un point de départ parfait pour des excursions en Belgique ou vers les pays limitrophes. Pour préparer votre programme, le site [Visit Brussels](https://www.visit.brussels/) propose de nombreuses idées de visites et d''activités. La [Ville de Bruxelles](https://www.bruxelles.be/) met également à disposition des informations pratiques sur les infrastructures et la circulation.\n\n## Réservez votre autocar au départ de Bruxelles\n\nNotre équipe est disponible 7j/7 pour vous conseiller et organiser votre transport. Contactez-nous pour une location d''autocar ou de minibus avec chauffeur à Bruxelles : devis personnalisé, réservation simple et service professionnel.',
    'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'Autocaravecchauffeur',
    'published',
    now()
  ),
  (
    'Location autocar Bruxelles pour excursion',
    'location-autocar-bruxelles-excursion',
    'Organisez vos excursions en autocar au départ de Bruxelles. Sorties scolaires, voyages associatifs, circuits touristiques en Belgique et en Europe. Chauffeur professionnel inclus.',
    E'# Location autocar Bruxelles pour excursion\n\nUne **excursion en autocar au départ de Bruxelles** permet de découvrir la Belgique et ses environs en toute sérénité. Autocaravecchauffeur accompagne les groupes pour des sorties d''une journée ou des séjours plus longs, avec un chauffeur expérimenté et un véhicule confortable.\n\n## Excursions populaires au départ de Bruxelles\n\n- Bruges, Gand, Anvers, Liège ou les Ardennes : nous adaptons l''itinéraire et le véhicule à votre effectif et à votre programme.\n- Sorties scolaires, voyages de clubs, séminaires et événements : notre [page services](https://autocaravecchauffeur.be/services) détaille les options (WiFi, climatisation, bagages).\n- Pour comparer les formules et obtenir un prix sur mesure, consultez notre [page tarifs](https://autocaravecchauffeur.be/tarifs) et demandez un devis gratuit.\n\n## S''informer sur Bruxelles et la Belgique\n\nAvant ou après votre excursion, [Visit Brussels](https://www.visit.brussels/) vous donne des idées de visites et d''activités dans la capitale. Pour des infos plus larges sur la Belgique, le portail [Belgium the place to be](https://www.belgiumtheplaceto.be/) propose des suggestions de destinations et d''événements.\n\n## Réservez votre excursion en autocar\n\nQue vous partiez de Bruxelles pour une journée à Bruges ou pour un circuit de plusieurs jours, nous vous proposons une location d''autocar avec chauffeur adaptée à votre groupe. Demandez votre devis gratuit et précisez votre date, votre effectif et votre destination.',
    'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'Autocaravecchauffeur',
    'published',
    now() - interval '1 day'
  )
ON CONFLICT (slug) DO NOTHING;

-- Attach posts to categories (Conseils + Destinations)
INSERT INTO blog_post_categories (post_id, category_id)
SELECT bp.id, bc.id
FROM blog_posts bp
CROSS JOIN blog_categories bc
WHERE
  (bp.slug = 'location-autocar-bruxelles' AND bc.slug IN ('conseils', 'destinations'))
  OR (bp.slug = 'location-autocar-bruxelles-excursion' AND bc.slug IN ('conseils', 'destinations'))
ON CONFLICT (post_id, category_id) DO NOTHING;
