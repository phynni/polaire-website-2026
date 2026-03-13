export interface CaseStudyMetric {
  label: string
  value: string
  detail?: string
}

export interface CaseStudySection {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  orderedItems?: { title: string; description: string }[]
}

export const clairEtNetCaseStudy = {
  slug: "lavage-vitres",
  company: "Clair & Net",
  pageTitle: "Clair & Net génère 29000$ en leads en 1 mois avec 1200$ de budget",
  previewHeadline: "93 leads qualifiés, 28 ventes et 276 % de ROI en un mois",
  previewSummary:
    "Pour son premier été, Clair & Net a remplacé le porte-à-porte par un tunnel basé sur du contenu éducatif short form, générant un flux entrant rentable et une base de marque durable à Québec.",
  executiveSummary:
    "Polaire a aidé Clair & Net à moderniser son acquisition client avec une stratégie de contenu short form éducatif, un funnel Meta orienté confiance et un système de suivi centré sur la rapidité d'appel.",
  clientSnapshotTitle: "Contexte client",
  clientSnapshot:
    "Jeune entreprise de lavage de vitres basée à Québec, Clair & Net voulait sortir du porte-à-porte, générer des leads de façon plus prévisible et bâtir une image de marque crédible dès sa première saison.",
  testimonialNote:
    "Aucun témoignage verbatim n'a été fourni. Cette boîte reprend le contexte et l'objectif exprimés par le client dans l'étude de cas.",
  testimonialQuote:
    "Moi et mes collègues avons eu recours au service de Phoenix, nous sommes très satisfaits, au delà d’améliorer notre présence en ligne il nous as amené un grand retour sur investissement.",
  testimonialAttribution: "William Therrien, Co-Propriétaire, C&N",
  heroMetrics: [
    { label: "ROI", value: "276 %" },
    { label: "ROAS", value: "6.97x" },
    { label: "Leads qualifiés", value: "93" },
    { label: "Ventes confirmées", value: "28" },
  ] satisfies CaseStudyMetric[],
  detailMetrics: [
    { label: "ROI", value: "276 %", detail: "rentabilité globale du système" },
    { label: "ROAS", value: "6.97x", detail: "sur le budget publicitaire Meta" },
    { label: "Leads qualifiés", value: "93", detail: "en un seul mois" },
    { label: "Ventes confirmées", value: "28", detail: "signées durant la campagne" },
    { label: "Revenus générés", value: "8 575 $", detail: "chiffre d'affaires attribué" },
    { label: "Pipeline", value: "29 465 $", detail: "opportunités totales créées" },
    { label: "CPL moyen", value: "13.23 $", detail: "presque moitié sous la moyenne provinciale" },
    { label: "Coût par vente", value: "43.93 $", detail: "efficacité de conversion opérationnelle" },
  ] satisfies CaseStudyMetric[],
  funnelHighlights: [
    "Contenu short form éducatif, humoristique et style TikTok diffusé sur Facebook, Instagram et groupes locaux.",
    "Tunnel en deux étapes : contenu TOF pour la confiance, puis formulaires instantanés Meta pour la conversion.",
    "Qualification rapide des leads et appels téléphoniques de suivi pour réduire les absences et augmenter le taux de fermeture.",
  ],
  sections: [
    {
      title: "Résumé / Aperçu exécutif",
      paragraphs: [
        "Comment Polaire a aidé Clair & Net à moderniser leur acquisition client grâce au contenu short form et au marketing éducatif.",
        "Clair & Net, une jeune entreprise de lavage de vitres basée à Québec, a collaboré avec Polaire durant son premier été afin de moderniser sa stratégie marketing et de se libérer des ventes porte-à-porte et de la dépendance au bouche à oreille. Dans un marché saturé de petites entreprises similaires, les trois cofondateurs de 18 ans avaient besoin d'un moyen scalable pour générer des clients potentiels et bâtir une reconnaissance de marque sans sacrifier leurs heures de travail sur le terrain.",
        "L'audit de Polaire a révélé que presque tous les concurrents de la région diffusaient les mêmes publicités Facebook statiques et promotionnelles. Pour se démarquer, Polaire a conçu un système de tunnel complet basé sur du contenu short form moderne : des vidéos éducatives, humoristiques et de style TikTok avec un montage dynamique et une narration authentique. La nouvelle stratégie a remplacé les promotions axées sur la vente par un contenu utile et axé sur la valeur, diffusé sur Facebook, Instagram et les groupes Facebook locaux, créant ainsi une base organique de confiance et de notoriété qui a alimenté les campagnes payantes.",
        "En un seul mois, le nouveau tunnel a généré 93 leads qualifiés, 28 ventes confirmées et un ROI de 276 %, tout en posant les bases d'une image de marque experte et de confiance qui continuera de se renforcer et de gagner en notoriété au fil des prochains étés.",
      ],
    },
    {
      title: "Défi / Contexte",
      paragraphs: [
        "Le marché du lavage de vitres à Québec et à Lévis est étonnamment concurrentiel, avec de nombreuses petites entreprises dirigées par de jeunes entrepreneurs qui se disputent les mêmes clients résidentiels. Avant de collaborer avec Polaire, Clair & Net dépendait entièrement du porte-à-porte et du bouche-à-oreille pour trouver de nouveaux clients.",
        "Cette approche traditionnelle est rapidement devenue un frein. En tant qu'entreprise de première année avec trois copropriétaires et aucun employé, les fondateurs devaient diviser leur temps entre la prospection et le nettoyage. Souvent, un ou deux partenaires vendaient en porte-à-porte pendant que les autres réalisaient les travaux en cours, ralentissant ainsi les opérations et épuisant leurs ressources limitées.",
        "Même avec un bon vendeur, le taux de conversion du porte-à-porte était faible, et les contrats à prix fixe faisaient chuter leur taux horaire effectif, puisque chaque travail prenait plus de temps à compléter. Ils avaient besoin d'un système d'acquisition client prévisible et évolutif, sans perdre de précieuses heures de travail sur le terrain.",
      ],
    },
    {
      title: "Stratégie / Réinventer le tunnel par l'éducation et la confiance",
      paragraphs: [
        "À travers une analyse détaillée du marché du lavage de vitres au Québec, Polaire a découvert que toutes les publicités se ressemblaient. Les concurrents inondaient Facebook d'images avant-après, de vidéos en accéléré avec trop de texte et de la même offre de « soumission gratuite ». Rien ne créait de confiance ni ne différenciait une entreprise d'une autre.",
        "Pour aider Clair & Net à se démarquer dans ce marché saturé, Polaire a fait un choix audacieux : arrêter de vendre et commencer à enseigner. Au lieu de lancer davantage de publicités promotionnelles, la stratégie s'est concentrée sur la production de contenu éducatif et axé sur la valeur, le type de contenu que les propriétaires de maisons veulent réellement regarder et partager.",
      ],
      bullets: [
        "Comment laver ses vitres comme un pro",
        "Trois erreurs à éviter lors du lavage de vitres",
        "Les meilleurs produits de nettoyage sur le marché",
        "Ce que nous avons appris après avoir dépensé 11 000 $ en produits de nettoyage",
      ],
    },
    {
      title: "La psychologie et l'architecture du funnel",
      paragraphs: [
        "En publiant ces vidéos de façon organique sur Instagram, Facebook et dans des groupes Facebook locaux, Clair & Net a bâti une image de marque fondée sur la fiabilité, la générosité et l'expertise. Lorsque les propriétaires voyaient plusieurs publicités de lavage de vitres sur Facebook, ils se tournaient naturellement vers Clair & Net, l'équipe qui leur avait déjà appris quelque chose gratuitement.",
        "Cette approche reposait sur le principe de réciprocité : lorsqu'une personne reçoit une valeur réelle sans rien devoir en retour, elle ressent davantage de confiance et de sympathie envers la marque. En enseignant aux propriétaires comment laver leurs propres vitres, Clair & Net est devenu l'expert aidant, plutôt qu'un simple fournisseur de services. Au moment de demander une soumission, ils étaient déjà en tête de liste dans l'esprit des clients.",
      ],
      orderedItems: [
        {
          title: "Top of Funnel (TOF) : notoriété et crédibilité",
          description:
            "Du contenu éducatif et parfois humoristique a permis de bâtir familiarité, confiance et crédibilité auprès du public, sans appel à l'action, seulement de la valeur authentique.",
        },
        {
          title: "Middle of Funnel (MOF) : conversion et capture de leads",
          description:
            "Une fois que le public percevait Clair & Net comme des professionnels fiables, Polaire a lancé des publicités Facebook offrant des soumissions gratuites via Meta Lead Form Ads.",
        },
      ],
      bullets: [
        "Objectif de campagne : Meta Lead Form Ads (Instant Forms)",
        "Logique de conversion : collecte des noms, numéros de téléphone et adresses pour permettre une soumission rapide",
        "Qualification : les formulaires incomplets ou contenant de fausses informations étaient automatiquement disqualifiés",
        "Suivi : chaque lead qualifié recevait un appel téléphonique personnel, ce qui réduisait les absences et augmentait le taux de fermeture",
        "Ciblage géographique : rayon de 10 à 16 km autour de Québec et de Lévis, plus Stoneham, Mont-Sainte-Anne et Massif du Sud",
        "Retargeting : visionnements de vidéos, ouvertures de formulaires et interactions balisés pour les étés suivants",
      ],
    },
    {
      title: "Résultats et Impact",
      paragraphs: [
        "Les résultats ne se sont pas fait attendre. En un seul mois, le nouveau tunnel axé sur la valeur a généré 93 leads qualifiés et 28 ventes confirmées, pour un revenu de 8 575 $ CA, avec un budget publicitaire de 1 229,94 $ CA et 1 050 $ CA en frais d'agence. Avec un pipeline évalué à 29 465 $ CA, la campagne a atteint un ROAS de 6,97× et un ROI de 276 %, soit plus du double de la rentabilité moyenne du secteur des services à domicile au Québec.",
        "Les leads provenaient de plusieurs canaux : commentaires sous les vidéos éducatives, messages privés sur la page Facebook, publications dans les groupes Facebook locaux et formulaires instantanés Meta. Chaque point d'entrée reflétait la force du système : l'engagement organique nourrissait naturellement le funnel payant. Le contenu éducatif incitait les propriétaires à initier le contact par eux-mêmes, tandis que les formulaires instantanés permettaient à Polaire d'identifier rapidement les prospects les plus qualifiés.",
        "Avec un coût par lead moyen de 13,23 $ CA, soit presque la moitié de la moyenne provinciale (20 à 40 $ CA), et un coût par vente de 43,93 $ CA, la campagne a démontré une efficacité remarquable.",
        "Les données ont toutefois montré que le pipeline aurait pu être encore mieux converti. Comme les trois propriétaires géraient à la fois les appels et les travaux sur le terrain, les délais de réponse dépassaient parfois la fenêtre idéale. Un représentant dédié au service client ou un setter capable d'appeler les leads dans les premières minutes aurait permis de convertir une plus grande portion du pipeline de 29 465 $ CA, une opportunité clé pour la saison suivante.",
        "De plus, la campagne s'est déroulée en juillet, une période où la demande saisonnière commence déjà à diminuer. Si cette même stratégie avait été lancée plus tôt, au printemps (avril ou mai), pendant le pic naturel de la demande en lavage de vitres, les résultats auraient probablement été encore bien supérieurs, tant en volume de leads qu'en valeur du pipeline.",
        "Même avec ces limites opérationnelles, la campagne de juillet a représenté une percée majeure. Le tunnel a prouvé qu'un marketing basé sur la confiance et l'éducation pouvait surpasser les promotions agressives, remplaçant le porte-à-porte par un flux prévisible de demandes entrantes. Pour Clair & Net, ce fut plus qu'un mois rentable : ce fut le moment où leur marketing est devenu un système évolutif pour la croissance future.",
      ],
    },
    {
      title: "Conclusion",
      paragraphs: [
        "La collaboration entre Polaire et Clair & Net a démontré comment une petite entreprise locale peut se développer comme une marque moderne en combinant authenticité et contenu court stratégique. En misant sur les réseaux sociaux, les vidéos organiques humoristiques et les récits éducatifs, Clair & Net a fait bien plus que générer des ventes : ils ont redéfini la façon dont le marketing du lavage de vitres peut exister au Québec.",
        "Cette modernisation leur a apporté plus que des clients. Elle les a libérés du porte-à-porte, leur a permis de bâtir une personnalité en ligne reconnaissable et les a transformés en une autorité locale digne de confiance. Le succès de la campagne a également prouvé que même les industries traditionnelles peuvent tirer parti du contenu court de style TikTok et des tunnels modernes pour attirer des clients qualifiés avec un minimum de friction.",
        "Pour la suite, Clair & Net pourra amplifier ces résultats grâce au retargeting et à un système de réponse plus rapide à mesure que l'équipe grandit. Les bases éducatives mises en place par Polaire garantissent que leur crédibilité de marque continuera de croître au fil du temps, se transformant en un moteur d'acquisition durable et en un actif commercial à long terme.",
      ],
    },
    {
      title: "Principaux Enseignements",
      bullets: [
        "L'éducation vend mieux que la promotion. Enseigner d'abord crée la confiance, la reconnaissance et la fidélité à long terme.",
        "Le short form est la nouvelle vitrine. Le contenu moderne, dynamique et de style TikTok capte l'attention plus efficacement que les publicités traditionnelles.",
        "L'humour et l'authenticité surpassent la mise en scène. Un contenu utile et relatable convertit mieux que des promotions scriptées.",
        "La rapidité de suivi est cruciale. Un système de rappel rapide peut considérablement augmenter le taux de conversion.",
        "La confiance de marque se cumule. Le contenu axé sur la valeur ne génère pas seulement des leads, il construit une réputation durable qui grandit chaque saison.",
      ],
    },
  ] satisfies CaseStudySection[],
} as const
