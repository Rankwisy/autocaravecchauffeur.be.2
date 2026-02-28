import { Mail, MapPin, Clock } from 'lucide-react';

export default function FooterAstro() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl =
    'https://wa.me/32489001530?text=' +
    encodeURIComponent("Bonjour, j'aimerais obtenir plus d'informations sur nos services d'autocar.");

  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-lime-400">Autocaravecchauffeur</h3>
            <p className="text-gray-400 leading-relaxed">
              Location d'autocar et minibus avec chauffeur basée à Bruxelles. Entreprises, écoles,
              événements. Devis gratuit, disponible 7j/7. Transport de groupe en Belgique et en Europe.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-lime-400">Contact et devis à Bruxelles</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-lime-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@autocaravecchauffeur.be"
                  className="text-gray-400 hover:text-lime-400 transition-colors"
                >
                  info@autocaravecchauffeur.be
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-lime-400 transition-colors inline-flex items-center space-x-2"
                >
                  <span className="text-lime-400">+32 489 00 15 30</span>
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-lime-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Bruxelles, Belgique</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-lime-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Disponible 7j/7 et 24h/24</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-lime-400">Nos services de transport</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Autocar avec chauffeur au départ de Bruxelles</li>
              <li>Excursions, transferts aéroports et gares</li>
              <li>Entreprises, écoles, événements</li>
              <li>Véhicules conformes LEZ Bruxelles</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 mb-4">
            <p>
              © {currentYear} Autocaravecchauffeur - Location autocar avec chauffeur Bruxelles. Tous
              droits réservés.
            </p>
          </div>
          <nav className="text-center text-sm text-gray-500" aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center space-x-4 list-none p-0 m-0">
              <li>
                <a href="/" className="hover:text-lime-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-lime-400 transition-colors">
                  Services autocar Bruxelles
                </a>
              </li>
              <li>
                <a href="/tarifs" className="hover:text-lime-400 transition-colors">
                  Tarifs et prix autocar Bruxelles
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-lime-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-lime-400 transition-colors">
                  Devis gratuit — Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
