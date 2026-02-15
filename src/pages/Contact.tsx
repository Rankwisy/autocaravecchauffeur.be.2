import { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { WhatsAppButton } from '../components/WhatsAppWidget';

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "TransportationService",
      "name": "Autocaravecchauffeur",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bruxelles",
        "addressCountry": "BE"
      },
      "availableLanguage": ["French", "Dutch", "English"],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": ["French", "Dutch", "English"],
        "hoursAvailable": "Mo-Su 00:00-23:59"
      }
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (!response.ok) throw new Error('Form submission failed');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Keep success message visible longer (10 seconds)
      setTimeout(() => {
        setStatus('idle');
      }, 10000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Une erreur est survenue. Veuillez réessayer ou contactez-nous par email.');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <SEO
        title="Devis Autocar Bruxelles | Contact Location Minibus Chauffeur"
        description="Demandez votre devis gratuit d'autocar ou minibus avec chauffeur à Bruxelles. Équipe disponible 7j/7. Réponse sous 48h."
        canonicalUrl="https://autocaravecchauffeur.be/contact"
        structuredData={structuredData}
      />
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
          <div className="w-24 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre équipe est disponible 7j/7 et 24h/24 pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-lime-400 hover:shadow-2xl transition-all">
              <div className="bg-lime-400 p-4 rounded-lg w-fit mb-6">
                <Mail className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Email</h3>
              <a
                href="mailto:info@autocaravecchauffeur.be"
                className="text-lg text-gray-700 hover:text-lime-600 transition-colors break-all"
              >
                info@autocaravecchauffeur.be
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-lime-400 hover:shadow-2xl transition-all">
              <div className="bg-lime-400 p-4 rounded-lg w-fit mb-6">
                <MapPin className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Adresse</h3>
              <p className="text-lg text-gray-700">Bruxelles, Belgique</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-lime-400 hover:shadow-2xl transition-all">
              <div className="bg-lime-400 p-4 rounded-lg w-fit mb-6">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Horaires</h3>
              <p className="text-lg text-gray-700">
                Notre équipe est disponible <span className="font-bold">7j/7 et 24h/24</span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl shadow-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4 text-black">Besoin d'une réponse immédiate ?</h3>
            <p className="text-lg text-black mb-6">
              Contactez-nous directement sur WhatsApp pour une assistance rapide
            </p>
            <WhatsAppButton
              phoneNumber="32489001530"
              label="Ouvrir WhatsApp"
              message="Bonjour, j'aimerais obtenir plus d'informations sur vos services d'autocar avec chauffeur."
              className="!bg-black !text-lime-400 hover:!bg-gray-900 hover:!text-lime-300"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Besoin d'informations ou de renseignements sur nos prestations ou notre société ?
                </h2>
                <p className="text-lg text-gray-600">
                  Vous pouvez nous contacter en utilisant le formulaire de contact ci-dessous
                </p>
              </div>

              {status === 'success' && (
                <div className="mb-8 bg-gradient-to-r from-lime-50 to-lime-100 border-2 border-lime-400 p-8 rounded-xl shadow-lg">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-lime-400 p-4 rounded-full">
                      <CheckCircle className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-lime-900 mb-3">
                        Merci pour votre message !
                      </h3>
                      <p className="text-lg text-lime-800 mb-2">
                        Votre demande a été envoyée avec succès.
                      </p>
                      <p className="text-base text-lime-700 mb-4">
                        Notre équipe vous répondra dans les <span className="font-bold">48 heures</span>.
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-lime-300 inline-block">
                        <p className="text-sm text-gray-700">
                          Pour toute urgence, contactez-nous directement au<br />
                          <a
                            href="mailto:info@autocaravecchauffeur.be"
                            className="font-bold text-lime-600 hover:text-lime-700 transition-colors"
                          >
                            info@autocaravecchauffeur.be
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-8 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg flex items-start space-x-4">
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-900 mb-1">Erreur</h4>
                    <p className="text-red-800">{errorMessage}</p>
                  </div>
                </div>
              )}

              {status !== 'success' && (
                <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-900 mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all"
                    placeholder="Votre nom et prénom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-gray-900 mb-2"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all"
                    placeholder="Sujet de votre demande"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-lime-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-lime-300 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center justify-center space-x-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires - Nous vous répondrons sous 48h
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
