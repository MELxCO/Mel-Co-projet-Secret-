
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Assurances from './pages/Assurances';
import GarantieDetail from './pages/GarantieDetail';
import DevisExpress from './pages/DevisExpress';
import { ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';

const PASSWORD_SECRET = "KTRASECURITE";

const SecurityScreen: React.FC<{ onUnlock: () => void }> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD_SECRET) {
      setSuccess(true);
      setTimeout(() => onUnlock(), 800);
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-sky flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md p-12 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(38,48,72,0.15)] text-center animate-fade-in border border-pastel">
        <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-10 transition-all duration-500 ${success ? 'bg-coral text-white rotate-[360deg]' : 'bg-sky text-navy shadow-inner'}`}>
          {success ? <CheckCircle size={40} /> : <ShieldCheck size={40} />}
        </div>
        
        <h1 className="text-3xl font-black text-navy mb-4 tracking-tighter uppercase leading-none">
          Espace <span className="text-coral">Sécurisé</span>
        </h1>
        <p className="text-navy/40 font-bold text-[10px] uppercase tracking-widest mb-12">
          Projet Mel&Co
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Mot de passe"
              className={`w-full bg-sky border-2 rounded-2xl px-6 py-5 focus:outline-none transition-all font-black text-navy text-center tracking-[0.5em] text-lg ${
                error ? 'border-coral animate-shake' : 'border-transparent focus:border-navy/10'
              }`}
              autoFocus
              disabled={success}
            />
            {error && (
              <p className="text-coral text-[10px] font-black mt-4 uppercase tracking-[0.2em]">
                Accès refusé
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={success}
            className={`w-full py-5 rounded-full font-black text-[13px] transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-xl ${
              success ? 'bg-navy text-white opacity-50' : 'bg-navy text-white hover:bg-coral shadow-navy/10 hover:shadow-coral/20'
            }`}
          >
            {success ? 'Chargement...' : 'Déverrouiller'} <ArrowRight size={18} />
          </button>
        </form>
        
        <p className="text-[10px] text-navy/20 mt-12 font-bold uppercase tracking-widest leading-loose">
          Cet espace est réservé aux <br />professionnels habilités.
        </p>
      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.3s cubic-bezier(.36,.07,.19,.97) both; }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('ktra_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleUnlock = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('ktra_auth', 'true');
  };

  if (isLoading) return null;

  if (!isAuthenticated) {
    return <SecurityScreen onUnlock={handleUnlock} />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assurances" element={<Assurances />} />
          <Route path="/assurance/:id" element={<GarantieDetail />} />
          <Route path="/devis" element={<DevisExpress />} />
          {/* Les autres routes sont gérées par les anchor links ou Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
