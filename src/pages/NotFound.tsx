import { Home, ArrowRight, Search, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

type PageType = 'home' | 'services' | 'contact' | 'blog' | 'blog-post' | 'pricing';

interface NotFoundProps {
  onNavigate: (page: PageType) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page non trouvée - 404",
    "description": "La page que vous recherchez n'existe pas ou a été déplacée."
  };

  return (
    <div>
      <SEO
        title="404 - Page Non Trouvée | Autocaravecchauffeur"
        description="La page que vous recherchez n'existe pas. Découvrez nos services de location d'autocar avec chauffeur à Bruxelles."
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
            <button
              onClick={() => onNavigate('home')}
              className="bg-lime-400 text-black p-6 rounded-xl hover:bg-lime-300 transition-all group"
            >
              <Home className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Accueil</h3>
              <p className="text-sm">Retour à la page d'accueil</p>
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-white/20 transition-all group"
            >
              <MapPin className="h-8 w-8 mx-auto mb-3 text-lime-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Nos Services</h3>
              <p className="text-sm text-gray-300">Découvrez nos offres</p>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-white/20 transition-all group"
            >
              <ArrowRight className="h-8 w-8 mx-auto mb-3 text-lime-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Contactez-nous</h3>
              <p className="text-sm text-gray-300">Demandez un devis</p>
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-lime-400">Besoin d'aide ?</h3>
            <p className="text-gray-300 mb-4">
              Notre équipe est disponible 7j/7 et 24h/24 pour répondre à vos questions et vous guider.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-lime-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-lime-300 transition-all inline-flex items-center space-x-2"
            >
              <span>Nous contacter</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
