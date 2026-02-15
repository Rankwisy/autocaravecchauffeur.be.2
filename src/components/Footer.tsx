import { Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppLink } from './WhatsAppWidget';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-lime-400">Autocaravecchauffeur</h3>
            <p className="text-gray-400 leading-relaxed">
              Compagnie d'autocars haut-de-gamme à Bruxelles. Transport de groupe en Belgique et en Europe.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-lime-400">Contact</h3>
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
              <div className="flex items-start">
                <WhatsAppLink
                  phoneNumber="32489001530"
                  label="+32 489 00 15 30"
                  message="Bonjour, j'aimerais obtenir plus d'informations sur vos services d'autocar."
                />
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
            <h3 className="text-xl font-bold mb-4 text-lime-400">Nos Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Excursions en Belgique et Europe</li>
              <li>Transferts aéroports et gares</li>
              <li>Transport pour événements</li>
              <li>Voyages scolaires et groupes</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 mb-4">
            <p>© {currentYear} Autocaravecchauffeur - Location autocar avec chauffeur Bruxelles. Tous droits réservés.</p>
          </div>
          <div className="text-center text-sm text-gray-500">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center space-x-4">
                <li><Link to="/" className="hover:text-lime-400 transition-colors">Accueil</Link></li>
                <li><Link to="/services" className="hover:text-lime-400 transition-colors">Services</Link></li>
                <li><Link to="/tarifs" className="hover:text-lime-400 transition-colors">Tarifs</Link></li>
                <li><Link to="/blog" className="hover:text-lime-400 transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-lime-400 transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
