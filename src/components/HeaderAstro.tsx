import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Tarifs', path: '/tarifs' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

interface HeaderAstroProps {
  currentPath: string;
}

export default function HeaderAstro({ currentPath }: HeaderAstroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isBlogPost = currentPath.startsWith('/blog/') && currentPath !== '/blog';

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    if (path === '/blog') return currentPath === '/blog' || isBlogPost;
    return currentPath === path;
  };

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-lg font-medium transition-all ${
      isActive(path) ? 'bg-lime-400 text-black' : 'text-white hover:bg-gray-800 hover:text-lime-400'
    }`;

  const mobileLinkClass = (path: string) =>
    `block w-full text-left px-4 py-3 rounded-lg font-medium transition-all mb-2 ${
      isActive(path) ? 'bg-lime-400 text-black' : 'text-white hover:bg-gray-800'
    }`;

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="bg-lime-400 p-2 rounded-lg group-hover:bg-lime-300 transition-colors">
              <img
                src="https://ik.imagekit.io/by733ltn6/FAVICONS/favicon_io%20(8)/android-chrome-512x512.png?updatedAt=1759666614382"
                alt="Autocaravecchauffeur Logo"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight block">Autocaravecchauffeur</span>
              <span className="text-xs text-gray-400 block">Autocar avec chauffeur à Bruxelles</span>
            </div>
          </a>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.path} className={linkClass(item.path)}>
                {item.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={mobileLinkClass(item.path)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
