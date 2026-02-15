import { useState, useEffect } from 'react';
import { Euro, Check, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

interface VehicleCategory {
  id: string;
  name: string;
  description: string;
  capacity_min: number;
  capacity_max: number;
}

interface PricingOption {
  id: string;
  category_id: string;
  service_type: string;
  duration_type: string;
  base_price: number;
  price_description: string | null;
  includes: string[] | null;
}

export default function Pricing() {
  const [categories, setCategories] = useState<VehicleCategory[]>([]);
  const [pricingOptions, setPricingOptions] = useState<PricingOption[]>([]);
  const [loading, setLoading] = useState(true);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "description": "Tarifs de location d'autocar et minibus avec chauffeur",
    "priceCurrency": "EUR",
    "provider": {
      "@type": "TransportationService",
      "name": "Autocaravecchauffeur"
    }
  };

  useEffect(() => {
    async function fetchPricingData() {
      try {
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('vehicle_categories')
          .select('*')
          .order('display_order');

        if (categoriesError) throw categoriesError;

        const { data: pricingData, error: pricingError } = await supabase
          .from('pricing_options')
          .select('*')
          .order('display_order');

        if (pricingError) throw pricingError;

        setCategories(categoriesData || []);
        setPricingOptions(pricingData || []);
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPricingData();
  }, []);

  const getPricingForCategory = (categoryId: string) => {
    return pricingOptions.filter(option => option.category_id === categoryId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO
          title="Tarifs Autocar Bruxelles | Devis Gratuit Minibus & Autocar"
          description="Prix location autocar et minibus avec chauffeur à Bruxelles. 2 à 63 places. Devis personnalisé gratuit sous 48h. Réservation simple."
          canonicalUrl="https://autocaravecchauffeur.be/tarifs"
          structuredData={structuredData}
        />
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-lime-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des tarifs...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title="Tarifs Autocar Bruxelles | Devis Gratuit Minibus & Autocar"
        description="Prix location autocar et minibus avec chauffeur à Bruxelles. 2 à 63 places. Devis personnalisé gratuit sous 48h. Réservation simple."
        canonicalUrl="https://autocaravecchauffeur.be/tarifs"
        structuredData={structuredData}
      />
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Prix location autocar avec chauffeur Belgique
          </h1>
          <div className="w-24 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos tarifs transparents pour la location d'autocars et minibus avec chauffeur professionnel
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-lime-400 p-3 rounded-lg mb-6">
              <Euro className="h-10 w-10 text-black" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Nos Tarifs par Catégorie de Véhicule
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Tous nos tarifs incluent un chauffeur professionnel et expérimenté. Les prix sont indicatifs et peuvent varier selon vos besoins spécifiques.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category) => {
              const pricing = getPricingForCategory(category.id);

              return (
                <div key={category.id} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-lime-400">
                  <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-3xl font-bold mb-3">{category.name}</h3>
                        <p className="text-gray-300 text-lg mb-2">{category.description}</p>
                        <p className="text-lime-400 font-semibold">
                          Capacité: {category.capacity_min} - {category.capacity_max} passagers
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {pricing.length > 0 ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {pricing.map((option) => (
                          <div key={option.id} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-lime-400 hover:shadow-lg transition-all">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-1">
                                  {option.service_type}
                                </h4>
                                <p className="text-sm text-gray-600 font-semibold">
                                  {option.duration_type}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-3xl font-bold text-lime-600">
                                  €{option.base_price.toFixed(0)}
                                </div>
                                <p className="text-sm text-gray-500">à partir de</p>
                              </div>
                            </div>

                            {option.price_description && (
                              <p className="text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                                {option.price_description}
                              </p>
                            )}

                            {option.includes && option.includes.length > 0 && (
                              <div className="space-y-2">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Inclus:</p>
                                {option.includes.map((item, index) => (
                                  <div key={index} className="flex items-start space-x-2">
                                    <Check className="h-5 w-5 text-lime-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">{item}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-center py-4">
                        Contactez-nous pour obtenir un devis personnalisé pour ce véhicule.
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl p-8 md:p-12 text-black shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Informations Importantes
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Tarifs indicatifs</h3>
                <p className="text-gray-900">
                  Les prix affichés sont des tarifs de base et peuvent varier selon la distance, la durée, la période et les services additionnels demandés.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Kilométrage supplémentaire</h3>
                <p className="text-gray-900">
                  Au-delà du kilométrage inclus, un supplément de €0.80 à €1.20 par kilomètre supplémentaire selon le véhicule.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Services additionnels</h3>
                <p className="text-gray-900">
                  Péages, parkings, hébergement du chauffeur pour les voyages de plusieurs jours en supplément.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Disponibilité 7j/7 et 24h/24</h3>
                <p className="text-gray-900">
                  Notre équipe est à votre disposition à tout moment pour établir un devis personnalisé adapté à vos besoins spécifiques.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold mb-6">
                Pour un devis personnalisé et détaillé, contactez-nous !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-black text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-all inline-flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Demander un devis</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:+32123456789"
                  className="bg-white text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Appelez-nous</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir Autocaravecchauffeur ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-lime-400 mb-2">16</div>
                <p className="text-gray-300">Véhicules dans notre flotte</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime-400 mb-2">48h</div>
                <p className="text-gray-300">Réponse garantie à votre devis</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime-400 mb-2">24/7</div>
                <p className="text-gray-300">Disponibilité de notre équipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
