
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavClick = (path: string, id?: string) => {
    if (location.pathname !== path) {
      navigate(path);
      if (id) {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Garanties', path: '/assurances' },
    { label: 'Nos Packs', path: '/', id: 'packs' },
    { label: 'Pourquoi K’TRA ?', path: '/', id: 'why' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center gap-3">
            <div className="bg-navy w-9 h-9 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-navy/20">K</div>
            <div className="flex flex-col leading-none">
              <span className="text-[14px] font-black text-navy tracking-tight uppercase">K’TRA <span className="text-coral">Assurances</span></span>
              <span className="text-[10px] font-bold text-navy/40 tracking-[0.2em] uppercase mt-1">Construction</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button 
                key={link.label} 
                onClick={() => handleNavClick(link.path, link.id)}
                className="text-[13px] font-bold text-navy/60 hover:text-coral transition-colors uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
            <Link to="/devis" className="bg-coral text-white px-7 py-3 rounded-full text-[13px] font-black hover:bg-navy transition-all shadow-lg shadow-coral/10 hover:shadow-navy/20 uppercase tracking-widest">
              Devis en 2 min
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-navy p-2 bg-sky rounded-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-8 animate-fade-in">
          <div className="flex justify-between items-center mb-12">
            <div className="bg-navy w-10 h-10 rounded-xl flex items-center justify-center text-white font-black">K</div>
            <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-sky rounded-full"><X /></button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.label} 
                onClick={() => { handleNavClick(link.path, link.id); setIsMenuOpen(false); }}
                className="text-3xl font-black text-navy text-left flex items-center justify-between group"
              >
                {link.label} <ChevronRight className="text-coral opacity-0 group-hover:opacity-100 transition-all" />
              </button>
            ))}
            <Link to="/devis" className="bg-coral text-white p-6 rounded-[2rem] text-center text-xl font-black shadow-xl shadow-coral/20 mt-4">
              Obtenir un devis
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center text-navy font-black">K</div>
                <span className="uppercase font-black text-xl tracking-tighter">K’TRA <span className="text-coral">Construction</span></span>
              </div>
              <p className="text-white/50 max-w-sm mb-10 text-lg leading-relaxed">
                Le partenaire d'assurance des marchands de biens les plus exigeants. Sécurisez vos marges avec une expertise dédiée.
              </p>
              <div className="flex gap-4">
                 <a href="tel:0100000000" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-coral transition-all">
                    <Phone size={24} />
                 </a>
                 <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-coral transition-all">
                    <MessageSquare size={24} />
                 </a>
              </div>
            </div>
            <div>
              <h4 className="font-black mb-8 text-white/40 uppercase tracking-widest text-xs">Expertise</h4>
              <ul className="space-y-4 font-bold text-sm">
                <li><Link to="/assurances" className="hover:text-coral transition-colors">Toutes nos Garanties</Link></li>
                <li><button onClick={() => handleNavClick('/', 'packs')} className="hover:text-coral transition-colors text-left">Packs MDB</button></li>
                <li><Link to="/devis?type=do" className="hover:text-coral transition-colors">Dommages-Ouvrage</Link></li>
                <li><Link to="/devis?type=rcpro" className="hover:text-coral transition-colors">RC Professionnelle</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-8 text-white/40 uppercase tracking-widest text-xs">Accès Rapide</h4>
              <ul className="space-y-4 font-bold text-sm">
                <li><button onClick={() => handleNavClick('/', 'why')} className="hover:text-coral transition-colors text-left">Pourquoi K'TRA ?</button></li>
                <li><Link to="/contact" className="hover:text-coral transition-colors">Contact Expert</Link></li>
                <li><Link to="/mentions" className="hover:text-coral transition-colors">Espace Client</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <p>© {new Date().getFullYear()} K’TRA ASSURANCES CONSTRUCTION. ORIAS N°XXXXXXXX.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
