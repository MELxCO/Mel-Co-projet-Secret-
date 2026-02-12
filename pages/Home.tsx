
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, ClipboardList, HardHat, Scale, Wallet, FileCheck } from 'lucide-react';
import { WHY_ARGUMENTS, GUARANTEES, PACKS } from '../constants';

const Home: React.FC = () => {
  const quickLinks = [
    { label: 'RC Pro MDB', path: '/devis?type=rc-pro', icon: <ShieldCheck size={20} /> },
    { label: 'Assurance PNO', path: '/devis?type=pno', icon: <Building2 size={20} /> },
    { label: 'Dommages-Ouvrage', path: '/devis?type=do', icon: <HardHat size={20} /> },
    { label: 'TRC - RC MO', path: '/devis?type=trc', icon: <ClipboardList size={20} /> },
    { label: 'Protec. Juridique', path: '/devis?type=pj', icon: <Scale size={20} /> },
    { label: 'GFA / VIR', path: '/devis?type=gfa', icon: <Wallet size={20} /> },
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="bg-sky pt-12 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-pastel text-navy text-[11px] font-black mb-10 uppercase tracking-[0.15em] shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse"></span> Spécialiste Marchands de Biens
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] text-navy max-w-5xl mx-auto">
            Assurances pour les <br />
            <span className="text-coral">Marchands de Biens</span>
          </h1>
          <p className="text-lg md:text-2xl text-navy/60 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            Sécurisez vos opérations immobilières avec un courtier qui comprend réellement vos risques et vos marges.
          </p>
          
          {/* Quick Access Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="bg-white p-6 rounded-[2rem] border border-pastel flex flex-col items-center gap-4 card-hover group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky flex items-center justify-center text-navy group-hover:bg-coral group-hover:text-white transition-all">
                  {link.icon}
                </div>
                <span className="text-[12px] font-black uppercase tracking-tighter text-navy text-center leading-tight">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Specialist */}
      <section id="why" className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-navy">L'expertise qui fait la différence</h2>
          <p className="text-navy/50 font-bold uppercase tracking-widest text-sm">Pourquoi un marchand de biens doit être assuré spécifiquement</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {WHY_ARGUMENTS.map((arg, idx) => (
            <div key={idx} className="bg-sky p-12 rounded-[3rem] border border-pastel hover:border-navy/10 transition-all duration-500 card-hover">
              <div className="mb-8 bg-white w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-navy/5">
                {arg.icon}
              </div>
              <h3 className="text-2xl font-black mb-6 text-navy leading-tight">{arg.title}</h3>
              <p className="text-navy/60 leading-relaxed font-medium text-lg">{arg.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Guarantees Preview */}
      <section className="bg-navy py-32 rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white leading-tight">Garanties <span className="text-coral">Sur-Mesure</span></h2>
              <p className="text-white/40 text-lg font-medium leading-relaxed">
                Plus qu'une simple assurance, un bouclier juridique et financier pour chaque étape de votre projet.
              </p>
            </div>
            <Link to="/assurances" className="bg-white/5 text-white px-8 py-4 rounded-full font-black flex items-center gap-3 hover:bg-coral transition-all uppercase text-xs tracking-widest">
              Découvrir tout le catalogue <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GUARANTEES.map((g) => (
              <Link key={g.id} to={`/assurance/${g.id}`} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 group hover:bg-white hover:border-white transition-all card-hover flex flex-col">
                <h4 className="font-black text-xl mb-6 text-white group-hover:text-navy transition-colors leading-tight">{g.title}</h4>
                <p className="text-white/40 group-hover:text-navy/60 text-sm mb-10 line-clamp-3 leading-relaxed flex-grow">{g.description}</p>
                <div className="text-[10px] font-black uppercase text-coral flex items-center gap-2 tracking-widest">
                  Fiche Technique <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packs Preview */}
      <section id="packs" className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-navy">Packs Opérationnels</h2>
          <p className="text-navy/50 font-bold uppercase tracking-widest text-sm">Des solutions packagées pour optimiser vos coûts</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKS.map((p) => (
            <div key={p.id} className={`bg-white p-10 rounded-[3rem] relative overflow-hidden flex flex-col border transition-all card-hover ${p.isPopular ? 'border-coral shadow-2xl shadow-coral/5 ring-4 ring-coral/5' : 'border-pastel'}`}>
              {p.isPopular && (
                <div className="absolute top-6 right-[-45px] rotate-45 bg-coral text-white text-[9px] font-black px-12 py-1.5 uppercase tracking-widest">
                  Conseillé
                </div>
              )}
              <h4 className="font-black text-2xl mb-2 text-navy leading-none">{p.name}</h4>
              <p className="text-navy/40 text-[11px] mb-8 font-bold uppercase tracking-widest">{p.description}</p>
              <ul className="space-y-5 mb-12 flex-grow">
                {p.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-navy/70 font-bold">
                    <CheckCircle2 size={18} className="text-coral shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/devis" className={`text-center py-5 rounded-2xl text-xs font-black transition-all uppercase tracking-widest ${p.isPopular ? 'bg-coral text-white' : 'bg-navy text-white'}`}>
                {p.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto bg-sky p-16 md:p-24 rounded-[4rem] text-center border border-pastel relative">
          <div className="text-6xl text-coral/20 font-black absolute top-12 left-12 leading-none">“</div>
          <p className="text-2xl md:text-4xl font-bold text-navy mb-12 leading-[1.2] tracking-tight">
            "En tant que marchand de biens, la rapidité est ma priorité. K’TRA m'a délivré une DO en un temps record là où les autres bloquaient sur la division foncière."
          </p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center font-black text-white text-xl mb-4 shadow-xl">SB</div>
            <p className="font-black text-navy text-lg">Stéphane B.</p>
            <p className="text-coral font-bold uppercase tracking-widest text-[10px] mt-1">Investisseur MDB - Lyon</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-coral p-16 md:p-32 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl shadow-coral/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.9]">Sécurisez votre <br />prochain projet</h2>
          <p className="text-lg md:text-xl font-medium mb-16 text-white/80 max-w-xl mx-auto">
            Prêt en 24h. Dossier complet validé par les banques. Un interlocuteur expert dédié.
          </p>
          <Link to="/devis" className="bg-navy text-white px-16 py-6 rounded-full font-black text-xl hover:scale-105 transition-all inline-flex items-center gap-4 shadow-2xl shadow-navy/40">
            Démarrer mon devis <ArrowRight size={28} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
