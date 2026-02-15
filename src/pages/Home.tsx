import { Shield, Users, Clock, Award, ArrowRight, CheckCircle, Star, Quote, Bus } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TransportationService",
    "name": "Autocaravecchauffeur",
    "description": "Location d'autocar et minibus avec chauffeur à Bruxelles pour transport de groupe",
    "url": "https://autocaravecchauffeur.be",
    "logo": "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/apple-touch-icon.png?updatedAt=1759666614409",
    "image": "https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/AZ.png?updatedAt=1759667457479",
    "areaServed": {
      "@type": "Country",
      "name": "Belgium"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bruxelles",
      "addressCountry": "BE"
    },
    "priceRange": "€€",
    "telephone": "+32-XXX-XXX-XXX",
    "openingHours": "Mo-Su 00:00-23:59",
    "availableService": [
      {
        "@type": "Service",
        "name": "Location d'autocar avec chauffeur",
        "description": "Transport de groupe de 2 à 63 passagers"
      },
      {
        "@type": "Service",
        "name": "Transfert aéroport",
        "description": "Service de transfert depuis et vers les aéroports belges"
      },
      {
        "@type": "Service",
        "name": "Excursions touristiques",
        "description": "Organisation d'excursions en Belgique et en Europe"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "6"
    }
  }

  return (
    <div>
      <SEO
        title="Autocaravecchauffeur - Location Autocar avec Chauffeur à Bruxelles | Transport Groupe"
        description="Location d'autocar et minibus avec chauffeur à Bruxelles. Flotte moderne de 16 véhicules (2-63 passagers). Transport groupe, excursions, transferts aéroport. Devis gratuit 7j/7."
        canonicalUrl="https://autocaravecchauffeur.be/"
        ogType="website"
        structuredData={structuredData}
      />
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/AZ.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Autocaravecchauffeur
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-lime-400 font-semibold drop-shadow-lg">
              Votre Satisfaction dans l'absolu !
            </p>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 drop-shadow-lg">
              LOUER UN AUTOCAR HAUT DE GAMME AVEC CHAUFFEUR
            </p>
            <Link
              to="/contact"
              className="bg-lime-400 text-black px-10 py-4 rounded-lg text-lg font-bold hover:bg-lime-300 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>Demander un devis</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Qui sommes nous ?</h2>
            <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Autocaravecchauffeur est une compagnie d'autocars haut-de-gamme qui répondra à tous vos besoins
              de transport de groupe en Bruxelles comme en Belgique pour les voyageurs des 4 coins du monde.
              Les voyages et les transferts sont adaptés aussi bien pour les clientèles individuelles
              (familles et couples) que pour les groupes (comités d'entreprise, associations et ….).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all border-t-4 border-lime-400 group hover:bg-lime-50">
              <div className="bg-black p-4 rounded-lg w-fit mb-6 group-hover:bg-lime-400 transition-colors">
                <Users className="h-8 w-8 text-lime-400 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Flotte complète</h3>
              <p className="text-gray-600 leading-relaxed">
                16 véhicules (autocars et minibus) pour transporter de 2 à 63 passagers dans un confort optimal.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all border-t-4 border-lime-400 group hover:bg-lime-50">
              <div className="bg-black p-4 rounded-lg w-fit mb-6 group-hover:bg-lime-400 transition-colors">
                <Shield className="h-8 w-8 text-lime-400 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Sécurité prioritaire</h3>
              <p className="text-gray-600 leading-relaxed">
                Notre flotte n'inclut que des véhicules récents et révisés scrupuleusement pour votre sécurité.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all border-t-4 border-lime-400 group hover:bg-lime-50">
              <div className="bg-black p-4 rounded-lg w-fit mb-6 group-hover:bg-lime-400 transition-colors">
                <Award className="h-8 w-8 text-lime-400 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Chauffeurs expérimentés</h3>
              <p className="text-gray-600 leading-relaxed">
                Chauffeurs recrutés selon des exigences strictes pour vous assurer un transport serein.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all border-t-4 border-lime-400 group hover:bg-lime-50">
              <div className="bg-black p-4 rounded-lg w-fit mb-6 group-hover:bg-lime-400 transition-colors">
                <Clock className="h-8 w-8 text-lime-400 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Réponse rapide</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous nous engageons à répondre à vos demandes de devis sous 48h avec un service sur-mesure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Choisir Autocaravecchauffeur ?
            </h2>
            <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-lime-400">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Transparence totale</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tarification claire et transparente sans frais cachés. Chaque devis est personnalisé selon vos besoins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-lime-400">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flotte moderne</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Véhicules récents équipés de WiFi, climatisation et systèmes de divertissement pour votre confort.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-lime-400">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Service personnalisé</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Équipe disponible 7j/7 et 24h/24 pour répondre à vos demandes et établir un devis sur-mesure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-lime-400">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise internationale</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Service en Belgique et dans toute l'Europe avec des chauffeurs expérimentés et multilingues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-lime-400">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ponctualité garantie</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Respect strict des horaires pour vos transferts, excursions et événements professionnels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-lime-400">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Adaptabilité complète</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Solutions flexibles pour tous types de groupes : entreprises, particuliers, écoles et associations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
              <p className="text-lg leading-relaxed mb-6">
                Autocaravecchauffeur, société d'autocars à Bruxelles, vous propose des services sur-mesure dans
                le domaine de la location d'autocars et minibus avec chauffeur au départ de Bruxelles :
                excursions, transferts, navettes, accompagnement de groupes (voyages scolaires, linguistiques…),
                transports pour particuliers et professionnels…
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Notre équipe est disponible <span className="font-bold text-lime-400">7 j/7 et 24h/24</span> par
                téléphone et/ou par mail pour répondre à toutes vos demandes.
              </p>
              <p className="text-lg leading-relaxed">
                Grâce à notre expérience et à la qualité de notre flotte, nous sommes en mesure de desservir
                toute la Belgique, mais aussi les destinations de votre choix en Europe.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="bg-white text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center justify-center space-x-2"
                >
                  <span>Découvrir nos services</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-lime-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-lime-300 transition-all inline-flex items-center justify-center space-x-2"
                >
                  <span>Nous contacter</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Notre Flotte
            </h2>
            <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de véhicules modernes et confortables, adaptés à tous vos besoins de transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/aze.png?updatedAt=1759667457388"
                  alt="Autocar grand tourisme de luxe 50 places avec climatisation et WiFi pour excursions en Belgique et Europe"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-lime-400 text-black px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                  <Bus className="h-5 w-5" />
                  <span>50+ Places</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Autocar Grand Tourisme</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Véhicule haut de gamme idéal pour les longs trajets et les excursions. Équipé de sièges confortables, climatisation, WiFi et système de divertissement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>Capacité jusqu'à 63 passagers</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>WiFi gratuit à bord</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>Climatisation moderne</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/AZ.png?updatedAt=1759667457479"
                  alt="Minibus premium 20 places pour mariages et événements privés à Bruxelles avec chauffeur professionnel"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-lime-400 text-black px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                  <Bus className="h-5 w-5" />
                  <span>20+ Places</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Minibus Premium</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Parfait pour les groupes moyens, mariages et événements privés. Confort optimal avec équipements modernes pour une expérience de voyage agréable.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>De 16 à 30 passagers</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>Sièges ergonomiques</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>Espace bagages généreux</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/31%20juiellet%20%20a%20bruxelles%20une%20bus%20marc%20man%20a%20laerport.png?updatedAt=1759691287357"
                  alt="Bus MAN moderne 50 places à l'aéroport de Bruxelles pour transferts aéroport et événements d'entreprise"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-lime-400 text-black px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                  <Bus className="h-5 w-5" />
                  <span>50 Places</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bus MAN Moderne</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bus de marque MAN, réputé pour sa fiabilité et son confort. Idéal pour les transferts aéroport, événements d'entreprise et excursions en groupe.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>Véhicule récent et entretenu</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>Système audio premium</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>Confort de conduite optimal</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/janvier%202025%20bruxelles%20bus%20blanche%20en%20route.png?updatedAt=1759691287360"
                  alt="Autocar urbain blanc 40 places en route à Bruxelles pour circuits touristiques et déplacements en ville"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-lime-400 text-black px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                  <Bus className="h-5 w-5" />
                  <span>40+ Places</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Autocar Urbain</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Véhicule polyvalent parfait pour les déplacements en ville et les circuits touristiques. Design moderne et équipements de haute qualité.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>Maniabilité en milieu urbain</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>Accès facilité PMR</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                    <span>Design contemporain</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-black text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-all inline-flex items-center space-x-2"
            >
              <span>Demander un devis pour votre flotte</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ce que Disent nos Clients
            </h2>
            <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur nos services de transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-lime-400" />
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-lime-400 fill-lime-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "Service impeccable pour notre voyage scolaire à Paris. Le chauffeur était ponctuel, professionnel et très sympathique. Les enfants ont adoré le confort du bus avec le WiFi."
              </p>
              <div className="flex items-center">
                <div className="bg-lime-400 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-lg">
                  ML
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Marie Leclerc</p>
                  <p className="text-sm text-gray-600">Directrice d'école</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-lime-400" />
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-lime-400 fill-lime-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "Nous avons loué un autocar 50 places pour notre séminaire d'entreprise. Tout était parfait : véhicule moderne, climatisation efficace, et surtout une grande ponctualité."
              </p>
              <div className="flex items-center">
                <div className="bg-lime-400 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-lg">
                  JD
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Jean Dupont</p>
                  <p className="text-sm text-gray-600">Responsable RH</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-lime-400" />
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-lime-400 fill-lime-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "Excellent service pour le transport des invités de notre mariage. Le chauffeur a été très arrangeant et le minibus était impeccable. Je recommande vivement !"
              </p>
              <div className="flex items-center">
                <div className="bg-lime-400 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-lg">
                  SB
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Sophie Bernard</p>
                  <p className="text-sm text-gray-600">Particulier</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-lime-400" />
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-lime-400 fill-lime-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "Transport parfait pour notre groupe de touristes. Le véhicule était spacieux et confortable, et le chauffeur connaissait très bien la région. Une expérience mémorable."
              </p>
              <div className="flex items-center">
                <div className="bg-lime-400 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-lg">
                  PM
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Pierre Martin</p>
                  <p className="text-sm text-gray-600">Guide touristique</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-lime-400" />
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-lime-400 fill-lime-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "Service de qualité pour notre transfert aéroport. Le chauffeur nous attendait avec une pancarte, nous a aidés avec les bagages. Très professionnel, je recommande."
              </p>
              <div className="flex items-center">
                <div className="bg-lime-400 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-lg">
                  AL
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Anne Lambert</p>
                  <p className="text-sm text-gray-600">Voyageuse internationale</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-lime-400" />
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-lime-400 fill-lime-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "Nous faisons régulièrement appel à Autocaravecchauffeur pour nos événements d'entreprise. Toujours à l'heure, toujours professionnel. Un partenaire de confiance."
              </p>
              <div className="flex items-center">
                <div className="bg-lime-400 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-lg">
                  TC
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Thomas Clément</p>
                  <p className="text-sm text-gray-600">Directeur général</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-black text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-all inline-flex items-center space-x-2"
            >
              <span>Rejoignez nos clients satisfaits</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
