import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type PageType = 'home' | 'services' | 'contact' | 'blog' | 'blog-post' | 'pricing';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType, slug?: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', page: 'home' as const },
    { name: 'Services', page: 'services' as const },
    { name: 'Tarifs', page: 'pricing' as const },
    { name: 'Blog', page: 'blog' as const },
    { name: 'Contact', page: 'contact' as const },
  ];

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <div className="bg-lime-400 p-2 rounded-lg group-hover:bg-lime-300 transition-colors">
              <img
                src="https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/android-chrome-512x512.png?updatedAt=1759666614462"
                alt="Autocaravecchauffeur Logo"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Autocaravecchauffeur</h1>
              <p className="text-xs text-gray-400">Transport de groupe à Bruxelles</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.page)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === item.page || (currentPage === 'blog-post' && item.page === 'blog')
                    ? 'bg-lime-400 text-black'
                    : 'text-white hover:bg-gray-800 hover:text-lime-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all mb-2 ${
                  currentPage === item.page || (currentPage === 'blog-post' && item.page === 'blog')
                    ? 'bg-lime-400 text-black'
                    : 'text-white hover:bg-gray-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
