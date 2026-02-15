import { Plane, MapPin, PartyPopper, GraduationCap, Wifi, Monitor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Services() {
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
        title="Location Autocar Bruxelles : Excursions, Transferts, Événements"
        description="Autocar et minibus avec chauffeur au départ de Bruxelles. Excursions Belgique & Europe, transferts aéroport, voyages scolaires, séminaires. Devis 48h."
        canonicalUrl="https://autocaravecchauffeur.be/services"
        structuredData={structuredData}
      />
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Services d'Autocar avec Chauffeur à Bruxelles</h1>
          <div className="w-24 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transport de groupe au départ de Bruxelles pour entreprises, écoles et événements. Devis gratuit, équipe disponible 7j/7.
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
                Excursions en autocar au départ de Bruxelles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Transport de groupe avec <strong>chauffeur professionnel</strong> pour une excursion en Belgique ou en Europe. Forfait journée ou trajet, réservation simple. Notre société <strong>basée à Bruxelles</strong> met à votre disposition une flotte d'autocars conformes <strong>LEZ</strong> (zone basse émission).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nos autocars au départ de Bruxelles sont équipés de WiFi, écran TV, lecteur CD et climatisation. Capacité adaptée à votre groupe. Idéaux pour <strong>entreprises</strong>, <strong>écoles</strong> et <strong>événements</strong>. Que vous soyez à Bruxelles-Ville, Schaerbeek, Ixelles, Anderlecht, Uccle, Woluwe ou ailleurs en Région bruxelloise, nous assurons la prise en charge.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Chauffeurs expérimentés pour vous guider. <strong>Devis gratuit</strong> sous 48h, sans engagement. Équipe <strong>disponible</strong> 7j/7 pour réserver votre autocar avec chauffeur à Bruxelles.
              </p>

              <div className="bg-lime-50 border-l-4 border-lime-400 p-6 rounded-r-lg">
                <p className="font-bold text-gray-900 mb-2">Le + Autocaravecchauffeur pour ce service :</p>
                <p className="text-gray-700">
                  Confort haut standing, chauffeur expérimenté. Excursions au départ de Bruxelles vers les plus beaux sites de Belgique et d'Europe. Devis sur demande.
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
                Transfert autocar avec chauffeur au départ de Bruxelles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Transferts aéroport et gare depuis ou vers Bruxelles. Navette et trajet sur mesure en autocar ou minibus <strong>avec chauffeur</strong>, <strong>disponible</strong> 7j/7. Idéal pour entreprises, écoles et groupes d'événements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Location d'autocar ou minibus avec chauffeur au départ de Bruxelles : efficacité et ponctualité. Réservation simple, <strong>devis gratuit</strong> sous 48h, sans engagement.
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
                  Autocar avec chauffeur à Bruxelles : entreprises, écoles, événements
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Location d'autocar ou minibus <strong>avec chauffeur</strong> au départ de Bruxelles pour <strong>entreprises</strong> (séminaires, congrès), <strong>écoles</strong> (voyages, sorties) et <strong>événements</strong> (mariages, anniversaires, baptêmes). Devis gratuit, équipe disponible.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Véhicules adaptés et service personnalisé pour rendre votre événement inoubliable. Réservez votre autocar à Bruxelles.
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
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Devis gratuit — Autocar avec chauffeur à Bruxelles</h2>
          <p className="text-lg text-gray-700 mb-10">
            Demandez votre devis personnalisé, sans engagement. Équipe disponible 7j/7, réponse sous 48h. Entreprises, écoles, événements.
          </p>
          <Link
            to="/contact"
            className="bg-lime-400 text-black px-10 py-4 rounded-lg text-lg font-bold hover:bg-lime-300 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Demander un devis gratuit et sans engagement</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
