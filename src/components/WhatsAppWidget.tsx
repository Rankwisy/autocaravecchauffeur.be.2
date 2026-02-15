import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
}

export default function WhatsAppWidget({
  phoneNumber = '32489001530',
  message = "Bonjour, j'aimerais obtenir plus d'informations sur vos services.",
  position = 'bottom-right'
}: WhatsAppWidgetProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const positionClasses = position === 'bottom-right'
    ? 'right-6 lg:right-8'
    : 'left-6 lg:left-8';

  return (
    <>
      <div
        className={`fixed bottom-6 lg:bottom-8 ${positionClasses} z-50 flex flex-col items-end space-y-3`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isExpanded && (
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-xs mb-2 border border-gray-200 animate-fadeIn">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-lime-400 p-2 rounded-full">
                  <MessageCircle className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Autocaravecchauffeur</h4>
                  <p className="text-xs text-gray-500">Généralement en ligne</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Besoin d'aide ? Contactez-nous sur WhatsApp pour une réponse rapide !
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-lime-400 text-black px-4 py-3 rounded-lg font-bold text-center hover:bg-lime-300 transition-all transform hover:scale-105"
            >
              Démarrer la conversation
            </a>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-lime-400 hover:bg-lime-300 text-black rounded-full p-4 lg:p-5 shadow-2xl transition-all transform hover:scale-110 relative group"
          aria-label="Ouvrir WhatsApp"
        >
          <MessageCircle className="h-7 w-7 lg:h-8 lg:w-8" />

          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>

          {isHovered && !isExpanded && (
            <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
              Contactez-nous sur WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
            </div>
          )}
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export function WhatsAppButton({
  phoneNumber = '32489001530',
  message = "Bonjour, j'aimerais obtenir plus d'informations sur vos services.",
  label = 'Contactez-nous sur WhatsApp',
  className = ''
}: {
  phoneNumber?: string;
  message?: string;
  label?: string;
  className?: string;
}) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-3 bg-lime-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-lime-300 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
}

export function WhatsAppLink({
  phoneNumber = '32489001530',
  message = "Bonjour, j'aimerais obtenir plus d'informations sur vos services.",
  label = 'WhatsApp',
  className = ''
}: {
  phoneNumber?: string;
  message?: string;
  label?: string;
  className?: string;
}) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-2 text-gray-400 hover:text-lime-400 transition-colors ${className}`}
    >
      <MessageCircle className="h-5 w-5 flex-shrink-0" />
      <span>{label}</span>
    </a>
  );
}
