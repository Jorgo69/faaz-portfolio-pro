// Données pour sections alternées - Structure modulable
export const alternatingContent = [
  {
    id: 1,
    type: 'image',
    media: '/images/sample-1.jpg',
    mediaLarge: '/images/sample-1-large.jpg',
    category: 'Photographie Artistique',
    title: 'Capturer l\'essence du moment',
    subtitle: 'Des portraits qui racontent votre histoire',
    description: 'Chaque portrait est une fenêtre sur l\'âme. Je travaille avec la lumière naturelle et artificielle pour créer des images intemporelles qui capturent la véritable personnalité de mes sujets.',
    features: [
      'Sessions en studio ou extérieur',
      'Direction artistique personnalisée',
      'Post-production professionnelle',
      'Livraison sous 7 jours'
    ],
    cta: {
      text: 'Réserver une séance',
      link: '/faaz-contact',
      internal: true
    },
    stats: [
      { value: '500+', label: 'Clients satisfaits' },
      { value: '10 ans', label: 'Expérience' },
      { value: '15k+', label: 'Photos prises' }
    ]
  },
  {
    id: 2,
    type: 'video',
    media: '/videos/clip-demo.mp4',
    poster: '/images/sample-2.jpg',
    category: 'Production Vidéo',
    title: 'Des clips qui marquent les esprits',
    subtitle: 'Créativité et technique au service de votre vision',
    description: 'De la préproduction au montage final, je gère l\'intégralité de la production de vos clips musicaux, publicités ou vidéos corporates. Chaque projet est unique et bénéficie d\'une approche créative sur-mesure.',
    features: [
      'Écriture de scénario et storyboard',
      'Tournage multi-caméras 4K',
      'Étalonnage cinématique',
      'Effets spéciaux et motion design'
    ],
    cta: {
      text: 'Découvrir le portfolio vidéo',
      link: '/clips-video-professionnels',
      internal: true
    }
  },
  {
    id: 3,
    type: 'image',
    media: '/images/sample-3.jpg',
    category: 'Événements Premium',
    title: 'Immortaliser vos moments précieux',
    subtitle: 'Couverture complète de vos événements',
    description: 'Mariages, galas, conférences, lancements de produits... Je documente vos événements avec discrétion et professionnalisme, en capturant chaque moment clé et toutes les émotions.',
    features: [
      'Couverture photo & vidéo simultanée',
      'Second photographe disponible',
      'Livraison express 48h',
      'Album premium personnalisé'
    ],
    cta: {
      text: 'Voir les événements couverts',
      link: '/couverture-evenement',
      internal: true
    },
    stats: [
      { value: '200+', label: 'Événements' },
      { value: '98%', label: 'Satisfaction' },
      { value: '24h', label: 'Réactivité' }
    ]
  },
  {
    id: 4,
    type: 'image',
    media: '/images/sample-4.jpg',
    category: 'Commercial & Mode',
    title: 'Sublimer votre marque',
    subtitle: 'Campagnes visuelles percutantes',
    description: 'Création de contenu visuel pour marques de mode, cosmétiques et lifestyle. Du lookbook aux campagnes publicitaires, je développe des univers visuels cohérents qui renforcent votre identité de marque.',
    features: [
      'Shooting produit et lifestyle',
      'Direction artistique complète',
      'Retouche haute définition',
      'Formats adaptés tous supports'
    ],
    cta: {
      text: 'Discuter de votre projet',
      link: '/faaz-contact',
      internal: true
    }
  }
]