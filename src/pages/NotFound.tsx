import { Home, ArrowRight, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page non trouvée - 404",
    "description": "La page que vous recherchez n'existe pas ou a été déplacée."
  };

  return (
    <div>
      <SEO
        title="404 - Page non trouvée | Autocar Bruxelles"
        description="Page introuvable. Retrouvez la location d'autocar avec chauffeur à Bruxelles : services, tarifs, contact. Devis gratuit."
        canonicalUrl="https://autocaravecchauffeur.be/404"
        structuredData={structuredData}
      />

      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-lime-400/10 rounded-full mb-6">
              <Search className="h-16 w-16 text-lime-400" />
            </div>

            <h1 className="text-8xl md:text-9xl font-bold mb-4 text-lime-400">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Page non trouvée</h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              Retournez à l'accueil pour découvrir nos services de transport de groupe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link
              to="/"
              className="bg-lime-400 text-black p-6 rounded-xl hover:bg-lime-300 transition-all group block"
            >
              <Home className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Accueil</h3>
              <p className="text-sm">Retour à la page d'accueil</p>
            </Link>

            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-white/20 transition-all group block"
            >
              <MapPin className="h-8 w-8 mx-auto mb-3 text-lime-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Services autocar et minibus Bruxelles</h3>
              <p className="text-sm text-gray-300">Voir nos formules avec chauffeur</p>
            </Link>

            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-white/20 transition-all group block"
            >
              <ArrowRight className="h-8 w-8 mx-auto mb-3 text-lime-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Devis gratuit</h3>
              <p className="text-sm text-gray-300">Demander un devis — sans engagement</p>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-lime-400">Besoin d'aide ?</h3>
            <p className="text-gray-300 mb-4">
              Notre équipe est disponible 7j/7 et 24h/24 pour répondre à vos questions et vous guider.
            </p>
            <Link
              to="/contact"
              className="bg-lime-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-lime-300 transition-all inline-flex items-center space-x-2"
            >
              <span>Demander un devis gratuit — sans engagement</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
