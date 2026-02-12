
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, HelpCircle, FileText, ArrowLeft, ArrowRight } from 'lucide-react';
import { GUARANTEES } from '../constants';

const GarantieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const guarantee = GUARANTEES.find(g => g.id === id);

  if (!guarantee) return <Navigate to="/assurances" />;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link to="/assurances" className="inline-flex items-center gap-2 text-[#263048]/50 hover:text-[#263048] mb-12 transition-colors font-bold uppercase text-xs tracking-widest">
        <ArrowLeft size={16} /> Retour aux garanties
      </Link>

      <div className="mb-20">
        <div className="inline-block bg-[#F2F6FF] text-[#F03754] border border-[#DAE3FF] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
          Expertise Marchand de Biens
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-[#263048]">{guarantee.title}</h1>
        <p className="text-2xl text-[#263048]/60 leading-relaxed font-medium max-w-4xl">{guarantee.description}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-20">
          {/* Problème */}
          <section>
            <h3 className="text-3xl font-black mb-8 flex items-center gap-4 text-[#263048]">
              <AlertTriangle className="text-[#F03754]" /> Le Risque Majeur
            </h3>
            <div className="bg-[#F2F6FF] p-10 rounded-[2.5rem] border-l-8 border-[#F03754] text-[#263048] font-medium leading-relaxed text-lg shadow-sm">
              {guarantee.problem}
            </div>
          </section>

          {/* Indispensable */}
          <section>
            <h3 className="text-3xl font-black mb-8 flex items-center gap-4 text-[#263048]">
              <HelpCircle className="text-[#263048]" /> Pourquoi c’est crucial
            </h3>
            <p className="text-[#263048]/70 leading-relaxed text-xl font-medium">
              {guarantee.whyIndispensable}
            </p>
          </section>

          {/* Couverture */}
          <section>
            <h3 className="text-3xl font-black mb-8 text-[#263048]">Périmètre de Couverture</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {guarantee.coverage.map((item, i) => (
                <div key={i} className="bg-white border border-[#DAE3FF] p-6 rounded-2xl flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="text-[#F03754] shrink-0" size={24} />
                  <span className="font-bold text-[#263048]">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Sinistres */}
          <section>
            <h3 className="text-3xl font-black mb-8 text-[#263048]">Exemples de Sinistres</h3>
            <div className="space-y-4">
              {guarantee.examples.map((ex, i) => (
                <div key={i} className="bg-[#F2F6FF] p-8 rounded-[2rem] flex flex-col md:flex-row md:justify-between md:items-center gap-6 border border-[#DAE3FF]">
                  <span className="text-[#263048] font-bold text-lg md:max-w-[60%] leading-snug">{ex.scenario}</span>
                  <span className="bg-white text-[#F03754] font-black border border-[#F03754]/20 px-6 py-2 rounded-full text-sm shadow-sm">
                    Impact : {ex.cost}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Conversion */}
        <aside className="lg:block">
          <div className="bg-[#263048] p-10 rounded-[3rem] sticky top-32 shadow-2xl text-white">
            <div className="text-center mb-10">
              <p className="text-blue-100/50 text-[10px] uppercase font-black tracking-widest mb-3">Tarification Indicative</p>
              <p className="text-4xl font-black text-[#F03754] leading-none">{guarantee.priceInfo}</p>
            </div>
            
            <div className="space-y-8 mb-10">
               <div>
                 <p className="font-black text-sm mb-4 flex items-center gap-3 uppercase tracking-widest">
                   <FileText size={18} className="text-[#F03754]" /> Pièces à fournir
                 </p>
                 <ul className="space-y-3 text-blue-100/70 font-medium text-sm">
                   {guarantee.documents.map((doc, i) => (
                     <li key={i} className="flex items-start gap-2">
                       <span className="text-[#F03754]">•</span> {doc}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

            <Link to="/devis" className="bg-[#F03754] w-full py-5 rounded-full text-white font-black text-lg flex items-center justify-center gap-3 hover:bg-[#d62f4a] transition-all shadow-xl">
              Devis immédiat <ArrowRight size={20} />
            </Link>
            
            <p className="text-[10px] text-blue-100/30 text-center mt-6 font-bold uppercase tracking-widest">
              Réponse en moins de 5 minutes
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default GarantieDetail;
