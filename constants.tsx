
import React from 'react';
import { Shield, FastForward, Landmark } from 'lucide-react';
import { Guarantee, InsurancePack } from './types';

export const GUARANTEES: Guarantee[] = [
  {
    id: 'rc-pro',
    title: 'RC Professionnelle MDB',
    description: 'La base indispensable pour votre activité de marchand de biens.',
    problem: 'Une erreur de division, un défaut de conseil ou un vice caché lors de la revente peut engager votre responsabilité personnelle et celle de votre entreprise.',
    coverage: ['Responsabilité civile exploitation', 'Responsabilité civile professionnelle', 'Défense et recours'],
    whyIndispensable: 'Le marchand de biens est un professionnel de l\'immobilier. À ce titre, sa responsabilité est présumée. Sans RC Pro, vous payez les dommages sur vos fonds propres.',
    examples: [
      { scenario: 'Erreur de mesurage entraînant une baisse de prix après vente.', cost: '15 000 €' },
      { scenario: 'Défaut d\'information sur une servitude.', cost: '25 000 €' }
    ],
    priceInfo: 'À partir de 450 € / an',
    documents: ['KBIS', 'Dernier bilan (si existant)', 'Questionnaire métier']
  },
  {
    id: 'trc',
    title: 'Tous Risques Chantier (TRC)',
    description: 'Protégez votre ouvrage contre les dommages matériels pendant les travaux.',
    problem: 'Incendie, vol, dégâts des eaux ou tempête peuvent arrêter votre chantier et détruire vos investissements avant même la fin des travaux.',
    coverage: ['Incendie / Explosion', 'Dégâts des eaux', 'Vandalisme / Vol', 'Catastrophes naturelles'],
    whyIndispensable: 'Elle permet une indemnisation rapide sans attendre de savoir qui est responsable (vous, l\'artisan ou un tiers). Crucial pour votre trésorerie.',
    examples: [
      { scenario: 'Incendie criminel sur un plateau en rénovation.', cost: '120 000 €' },
      { scenario: 'Vol de cuivre et de chaudières déjà installées.', cost: '12 000 €' }
    ],
    priceInfo: 'À partir de 0,25 % du montant des travaux',
    documents: ['Descriptif travaux', 'Devis entreprises', 'Planning']
  },
  {
    id: 'do',
    title: 'Dommages-Ouvrage (DO)',
    description: 'La garantie décennale activable immédiatement en cas de désordre structurel.',
    problem: 'Après la revente, si un mur s\'effondre ou qu\'une infiltration rend le bien inhabitable, l\'acquéreur se retournera contre vous.',
    coverage: ['Solidité de l\'ouvrage', 'Infiltration par la toiture / menuiseries', 'Éléments d\'équipements indissociables'],
    whyIndispensable: 'Obligatoire par la loi Spinetta dès que vous touchez au gros œuvre. Sans DO, les notaires bloqueront souvent la revente.',
    examples: [
      { scenario: 'Fissures structurelles après division.', cost: '85 000 €' },
      { scenario: 'Infiltration toiture sur immeuble rénové.', cost: '30 000 €' }
    ],
    priceInfo: 'Sur devis personnalisé selon opération',
    documents: ['Attestations décennales des entreprises', 'Contrôle technique (si requis)', 'Permis de construire']
  },
  {
    id: 'pno',
    title: 'PNO MDB',
    description: 'Assurance Propriétaire Non Occupant dédiée aux stocks MDB.',
    problem: 'Votre bien est vide ou en attente de travaux. Un sinistre survient alors qu\'il n\'est pas assuré par un occupant.',
    coverage: ['Incendie', 'Dégâts des eaux', 'Responsabilité civile propriétaire'],
    whyIndispensable: 'Comble le vide d\'assurance entre l\'acquisition et le début des travaux ou la revente.',
    examples: [
      { scenario: 'Rupture de canalisation inondant le voisin du dessous.', cost: '5 000 €' }
    ],
    priceInfo: 'Forfait annuel attractif',
    documents: ['Adresse du bien', 'Surface']
  }
];

export const PACKS: InsurancePack[] = [
  {
    id: 'pack-acq',
    name: 'Pack Acquisition',
    description: 'Idéal pour sécuriser l’achat immédiat.',
    items: ['RC Professionnelle MDB', 'PNO MDB'],
    ctaText: 'Demander ce pack'
  },
  {
    id: 'pack-travaux',
    name: 'Pack Travaux',
    description: 'Le pack le plus demandé pour vos rénovations.',
    items: ['Tous Risques Chantier', 'RC Maître d’Ouvrage', 'Dommages-Ouvrage'],
    ctaText: 'Protéger mon chantier',
    isPopular: true
  },
  {
    id: 'pack-revente',
    name: 'Pack Revente',
    description: 'Pour accélérer la commercialisation.',
    items: ['Garantie Revente', 'RC Professionnelle MDB'],
    ctaText: 'Sécuriser ma revente'
  },
  {
    id: 'pack-full',
    name: 'Opération Complète',
    description: 'Solution premium pour marchands de biens.',
    items: ['RC Pro', 'PNO', 'TRC', 'RC MO', 'DO', 'Garantie Revente'],
    ctaText: 'Choisir le pack complet'
  }
];

export const WHY_ARGUMENTS = [
  {
    icon: <Shield className="w-8 h-8 text-[#263048]" />,
    title: 'Opérations à haut risque',
    description: 'Rénovation lourde, division, copropriété... Les opérations MDB exigent une expertise que les assureurs généralistes ne maîtrisent pas.'
  },
  {
    icon: <FastForward className="w-8 h-8 text-[#263048]" />,
    title: 'Réactivité Indispensable',
    description: 'Devis en 5 minutes, souscription en 24h. Nous comprenons vos contraintes de planning et vos enjeux financiers.'
  },
  {
    icon: <Landmark className="w-8 h-8 text-[#263048]" />,
    title: 'Crédibilité Partenaires',
    description: 'Des dossiers propres qui rassurent banques et notaires. Vos garanties sont conformes et votre opération est sécurisée.'
  }
];
