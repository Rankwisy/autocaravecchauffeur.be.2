import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Tarifs', path: '/tarifs' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg font-medium transition-all ${
      isActive ? 'bg-lime-400 text-black' : 'text-white hover:bg-gray-800 hover:text-lime-400'
    }`;

  const mobileLinkClass = (path: string) =>
    `block w-full text-left px-4 py-3 rounded-lg font-medium transition-all mb-2 ${
      location.pathname === path || (path === '/blog' && isBlogPost)
        ? 'bg-lime-400 text-black'
        : 'text-white hover:bg-gray-800'
    }`;

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink
            to="/"
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
              <h1 className="text-xl font-bold tracking-tight">Autocaravecchauffeur</h1>
              <p className="text-xs text-gray-400">Transport de groupe à Bruxelles</p>
            </div>
          </NavLink>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  linkClass({
                    isActive: isActive || (item.path === '/blog' && isBlogPost),
                  })
                }
              >
                {item.name}
              </NavLink>
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
              <NavLink
                key={item.name}
                to={item.path}
                className={mobileLinkClass(item.path)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
