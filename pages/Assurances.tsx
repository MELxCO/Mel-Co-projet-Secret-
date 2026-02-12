
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { GUARANTEES } from '../constants';

const Assurances: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-20">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-[#263048]">Nos Assurances <span className="text-[#F03754]">MDB</span></h1>
        <p className="text-xl text-[#263048]/60 max-w-3xl font-medium leading-relaxed">
          Chaque opération comporte des risques techniques, juridiques et financiers. 
          Nous vous proposons des garanties pensées pour sécuriser votre marge et votre planning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {GUARANTEES.map((g) => (
          <Link 
            key={g.id} 
            to={`/assurance/${g.id}`}
            className="bg-white group p-12 rounded-[2.5rem] border border-[#DAE3FF] hover:border-[#F03754]/30 hover:shadow-2xl transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
               <h2 className="text-3xl font-black tracking-tight text-[#263048] group-hover:text-[#F03754] transition-colors">{g.title}</h2>
               <div className="w-14 h-14 rounded-full bg-sky flex items-center justify-center group-hover:bg-[#F03754] group-hover:text-white transition-all text-[#263048]">
                  <ArrowRight size={24} />
               </div>
            </div>
            <p className="text-[#263048]/60 mb-8 flex-grow leading-relaxed font-medium">
              {g.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
               {g.coverage.map((tag, i) => (
                 <span key={i} className="text-[10px] uppercase font-black tracking-widest bg-sky px-4 py-2 rounded-full text-[#263048]/70 group-hover:bg-[#DAE3FF] transition-colors">
                   {tag}
                 </span>
               ))}
            </div>
            <div className="pt-8 border-t border-[#DAE3FF] flex justify-between items-center">
               <span className="text-[#F03754] font-black text-lg">{g.priceInfo}</span>
               <span className="text-xs font-black uppercase tracking-widest text-[#263048]/40 group-hover:text-[#263048] transition-colors">Détails de l'offre</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-24 p-12 md:p-20 bg-pastel rounded-[3.5rem] relative overflow-hidden">
        <div className="max-w-2xl relative z-10">
          <h3 className="text-3xl md:text-4xl font-black mb-8 text-[#263048]">Besoin d'un conseil spécifique ?</h3>
          <p className="text-[#263048]/60 mb-10 text-lg font-medium leading-relaxed">
            Certaines opérations complexes (grosse promotion, vente en l'état futur de rénovation, divisions atypiques) demandent une analyse humaine fine. Nos experts sont là pour vous.
          </p>
          <Link to="/contact" className="bg-[#263048] text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-[#1e263a] shadow-lg transition-all">
            Parler à un expert MDB <ChevronRight size={20} />
          </Link>
        </div>
        <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-white/20 blur-[80px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Assurances;
