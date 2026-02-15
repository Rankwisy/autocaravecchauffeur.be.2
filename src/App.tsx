import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Pricing from './pages/Pricing';

type PageType = 'home' | 'services' | 'contact' | 'blog' | 'blog-post' | 'pricing';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [blogPostSlug, setBlogPostSlug] = useState<string>('');

  const handleNavigate = (page: PageType, slug?: string) => {
    setCurrentPage(page);
    if (slug) {
      setBlogPostSlug(slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'pricing':
        return <Pricing onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'blog-post':
        return <BlogPost slug={blogPostSlug} onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
