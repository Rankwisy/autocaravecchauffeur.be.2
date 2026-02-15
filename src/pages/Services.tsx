import { Plane, MapPin, PartyPopper, GraduationCap, Wifi, Monitor, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

type PageType = 'home' | 'services' | 'contact' | 'blog' | 'blog-post';

interface ServicesProps {
  onNavigate: (page: PageType, slug?: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Location d'autocar avec chauffeur",
    "provider": {
      "@type": "TransportationService",
      "name": "Autocaravecchauffeur"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Belgium"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de transport",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Excursions en autocar",
            "description": "Transport de groupe pour excursions en Belgique et en Europe"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transfert aéroport",
            "description": "Service de transfert depuis aéroports et gares"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Événements privés",
            "description": "Transport pour mariages, anniversaires et célébrations"
          }
        }
      ]
    }
  };

  return (
    <div>
      <SEO
        title="Nos Services - Transport Groupe & Excursions en Autocar | Autocaravecchauffeur"
        description="Services de location d'autocar et minibus avec chauffeur : excursions Belgique-Europe, transferts aéroport, événements privés, voyages scolaires. Équipements WiFi, TV. Devis 48h."
        canonicalUrl="https://autocaravecchauffeur.be/services"
        structuredData={structuredData}
      />
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Services</h1>
          <div className="w-24 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions de transport de groupe adaptées à tous vos besoins en Belgique et en Europe
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block bg-lime-400 p-3 rounded-lg mb-6">
                <MapPin className="h-10 w-10 text-black" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Excursions en autocar en Belgique et en Europe
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vous avez besoin d'un moyen de transport de groupe pour une excursion en Belgique ou à
                l'étranger ? Notre société à Bruxelles met à votre disposition notre flotte d'autocars.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En effet, nos autocars sont équipés de toute la technologie disponible. Que ce soit du Wifi ou
                encore d'un écran TV ou lecteur CD, nos autocars à Bruxelles sont tous équipés.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                En outre, accompagné de notre équipe de chauffeurs expérimentés, vous serez guidé au mieux pour
                votre excursion. N'hésitez pas à nous envoyer un devis, nous vous répondons sous 48H.
              </p>

              <div className="bg-lime-50 border-l-4 border-lime-400 p-6 rounded-r-lg">
                <p className="font-bold text-gray-900 mb-2">Le + Autocaravecchauffeur pour ce service :</p>
                <p className="text-gray-700">
                  Le confort d'un car de haut standing pour voyager en étant accompagné chaque jour par un
                  chauffeur expérimenté pour se rendre dans les plus grands sites touristiques de Bruxelles ou
                  d'Europe.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-lime-400">Équipements inclus</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-400 p-2 rounded-lg flex-shrink-0">
                    <Wifi className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Wifi à bord</h4>
                    <p className="text-gray-400">Restez connecté durant tout votre voyage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-lime-400 p-2 rounded-lg flex-shrink-0">
                    <Monitor className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Écran TV / Lecteur CD</h4>
                    <p className="text-gray-400">Divertissement pour tous les passagers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-6">Service de transfert premium</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-black p-1 rounded-full flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  </div>
                  <span>Prise en charge directe à l'aéroport ou la gare</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-black p-1 rounded-full flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  </div>
                  <span>Véhicules déjà en place à l'arrivée</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-black p-1 rounded-full flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  </div>
                  <span>Aucune attente pour votre groupe</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-black p-1 rounded-full flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  </div>
                  <span>Conditions optimales de transport</span>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block bg-lime-400 p-3 rounded-lg mb-6">
                <Plane className="h-10 w-10 text-black" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Transfert en autocar depuis un aéroport ou une gare
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Autocaravecchauffeur est disponible pour tous vos besoins de transfert depuis un aéroport ou
                une gare, le tout, vers la destination de votre choix.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                En effet, la location d'un autocar ou d'un minibus avec chauffeur est la solution la plus
                adéquate. Faites le choix de l'efficacité et de la ponctualité avec les navettes
                Autocaravecchauffeur.
              </p>

              <div className="bg-lime-50 border-l-4 border-lime-400 p-6 rounded-r-lg">
                <p className="font-bold text-gray-900 mb-2">Le + Autocaravecchauffeur pour ce service :</p>
                <p className="text-gray-700">
                  Le car réservé pour la prestation sera déjà en place au moment de l'atterrissage pour
                  récupérer votre groupe. Ainsi, les voyageurs n'auront pas d'attente supplémentaire et
                  pourront se reposer après un long voyage, le tout dans des conditions optimales de transport !
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-lime-400 p-3 rounded-lg mb-6">
                  <PartyPopper className="h-10 w-10 text-black" />
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Services de transport pour particuliers et professionnels
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Pour organiser le transport de vos invités, pensez à la location d'un autocar avec chauffeur
                  ! Que ce soit pour un mariage, un anniversaire, un baptême ou un événement privé.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Nous vous proposons des véhicules adaptés à vos besoins ainsi qu'un service personnalisé pour
                  rendre votre événement inoubliable.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="bg-lime-400 p-2 rounded-lg flex-shrink-0">
                      <PartyPopper className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-lime-400">Événements privés</h3>
                      <p className="text-gray-300">
                        Mariages, anniversaires, baptêmes et célébrations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="bg-lime-400 p-2 rounded-lg flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-lime-400">Voyages scolaires</h3>
                      <p className="text-gray-300">
                        Transport sécurisé pour excursions et voyages linguistiques
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-lime-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Prêt à réserver votre transport ?</h2>
          <p className="text-lg text-gray-700 mb-10">
            Demandez votre devis personnalisé dès maintenant. Nous vous répondons sous 48h !
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-lime-400 text-black px-10 py-4 rounded-lg text-lg font-bold hover:bg-lime-300 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Demander un devis</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
