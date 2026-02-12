
import React, { useState } from 'react';
import { Send, CheckCircle, ChevronRight } from 'lucide-react';

const DevisExpress: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <div className="w-24 h-24 rounded-full bg-[#F2F6FF] border border-[#DAE3FF] flex items-center justify-center mx-auto mb-10 shadow-lg">
           <CheckCircle className="text-[#F03754]" size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#263048] mb-6 tracking-tighter">C’est envoyé !</h1>
        <p className="text-[#263048]/60 text-xl font-medium mb-12 leading-relaxed">
          Un expert K’TRA spécialisé Marchands de Biens analyse votre projet. Vous recevrez votre proposition sous 24h ouvrées.
        </p>
        <button onClick={() => setSubmitted(false)} className="bg-[#263048] text-white px-10 py-4 rounded-full font-bold hover:bg-[#1e263a] transition-all shadow-lg">
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-[#263048]">Votre Devis <span className="text-[#F03754]">MDB</span></h1>
        <p className="text-xl text-[#263048]/60 font-medium">Réponse complète et devis chiffré sous quelques minutes.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-[#DAE3FF] p-8 md:p-16 rounded-[3.5rem] shadow-2xl space-y-12">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-[#263048]/40 ml-1">Type d’opération</label>
            <select className="w-full bg-[#F2F6FF] border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F03754] transition-all font-bold text-[#263048]">
              <option>Rénovation lourde</option>
              <option>Division foncière</option>
              <option>Division de bâti</option>
              <option>Construction neuve</option>
              <option>Aménagement / Rafraîchissement</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-[#263048]/40 ml-1">Adresse du projet</label>
            <input type="text" placeholder="Ville ou Code Postal" className="w-full bg-[#F2F6FF] border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F03754] transition-all font-bold text-[#263048]" required />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-[#263048]/40 ml-1">Montant travaux (€)</label>
            <input type="number" placeholder="ex: 200000" className="w-full bg-[#F2F6FF] border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F03754] transition-all font-bold text-[#263048]" required />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-[#263048]/40 ml-1">Date de début estimée</label>
            <input type="date" className="w-full bg-[#F2F6FF] border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F03754] transition-all font-bold text-[#263048]" required />
          </div>
        </div>

        <div className="pt-10 border-t border-[#DAE3FF]">
          <h3 className="text-lg font-black text-[#263048] mb-8 uppercase tracking-widest">Vos coordonnées professionnelles</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-[#263048]/40 ml-1">Email pro</label>
              <input type="email" placeholder="contact@votre-entreprise.fr" className="w-full bg-[#F2F6FF] border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F03754] transition-all font-bold text-[#263048]" required />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-[#263048]/40 ml-1">Téléphone</label>
              <input type="tel" placeholder="06 00 00 00 00" className="w-full bg-[#F2F6FF] border-2 border-transparent rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F03754] transition-all font-bold text-[#263048]" required />
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <button type="submit" className="bg-[#F03754] text-white px-14 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl inline-flex items-center gap-4">
            Envoyer ma demande <ChevronRight size={24} />
          </button>
          <p className="text-xs font-bold text-[#263048]/40 mt-8 uppercase tracking-widest">
            Expertise K’TRA - Devis gratuit et sans engagement
          </p>
        </div>
      </form>
    </div>
  );
};

export default DevisExpress;
