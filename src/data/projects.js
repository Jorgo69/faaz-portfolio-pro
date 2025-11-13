// Données de projets – remplacer par fetch('/api/gallery') pour API dynamique
// export const projects = [
//   {
//     id: 1,
//     title: 'Séance Portrait Studio',
//     client: 'Marie Dubois',
//     category: 'photography',
//     date: '2024-01-15',
//     image: '/images/sample-1.jpg',
//     thumb: '/images/sample-1.jpg',
//     description: 'Séance portrait artistique en studio avec éclairage naturel.'
//   },
//   {
//     id: 2,
//     title: 'Clip Musical - Artiste Émergent',
//     client: 'Label Sonore',
//     category: 'clips',
//     type: 'video',
//     date: '2024-02-20',
//     image: '/images/sample-2.jpg',
//     thumb: '/images/sample-2.jpg',
//     description: 'Production complète d\'un clip musical urbain.'
//   },
//   {
//     id: 3,
//     title: 'Mariage Château de Versailles',
//     client: 'Sophie & Thomas',
//     category: 'event',
//     date: '2024-03-10',
//     image: '/images/sample-3.jpg',
//     thumb: '/images/sample-3.jpg',
//     description: 'Couverture photo et vidéo d\'un mariage de luxe.'
//   },
//   {
//     id: 4,
//     title: 'Campagne Mode Printemps',
//     client: 'Maison Élégance',
//     category: 'photography',
//     date: '2024-04-05',
//     image: '/images/sample-4.jpg',
//     thumb: '/images/sample-4.jpg',
//     description: 'Shooting mode pour la collection printemps-été 2024.'
//   },
//   {
//     id: 5,
//     title: 'Documentaire Entreprise',
//     client: 'Tech Innovations SA',
//     category: 'clips',
//     type: 'video',
//     date: '2024-05-12',
//     image: '/images/sample-5.jpg',
//     thumb: '/images/sample-5.jpg',
//     description: 'Vidéo corporate présentant l\'innovation technologique.'
//   },
//   {
//     id: 6,
//     title: 'Festival Jazz en Plein Air',
//     client: 'Association Jazz & Co',
//     category: 'event',
//     date: '2024-06-22',
//     image: '/images/sample-6.jpg',
//     thumb: '/images/sample-6.jpg',
//     description: 'Reportage photo d\'un festival de jazz estival.'
//   },
//   {
//     id: 7,
//     title: 'Architecture Urbaine',
//     client: 'Projet Personnel',
//     category: 'photography',
//     date: '2024-07-18',
//     image: '/images/sample-7.jpg',
//     thumb: '/images/sample-7.jpg',
//     description: 'Série photographique sur l\'architecture contemporaine.'
//   },
//   {
//     id: 8,
//     title: 'Clip Promotionnel Restaurant',
//     client: 'Le Gourmet Parisien',
//     category: 'clips',
//     type: 'video',
//     date: '2024-08-30',
//     image: '/images/sample-8.jpg',
//     thumb: '/images/sample-8.mp4',
//     description: 'Vidéo promotionnelle gastronomique haut de gamme.'
//   }
// ]

// Données de projets avec support vidéo local + externe
export const projects = [
  {
    id: 1,
    title: 'Séance Portrait Studio',
    client: 'Marie Dubois',
    category: 'photography',
    type: 'image', // IMPORTANT
    date: '2024-01-15',
    image: '/images/sample-1.jpg',
    thumb: '/images/sample-1.jpg',
    description: 'Séance portrait artistique en studio avec éclairage naturel.'
  },
  {
    id: 2,
    title: 'Clip Musical - Artiste Émergent',
    client: 'Label Sonore',
    category: 'clips',
    type: 'video', // IMPORTANT
    date: '2024-02-20',
    video: '/videos/clip-demo.mp4', // Vidéo locale
    thumb: '/images/sample-2.jpg', // Thumbnail pour la grille
    image: '/images/sample-2.jpg', // Fallback
    description: 'Production complète d\'un clip musical urbain.'
  },
  {
    id: 3,
    title: 'Mariage Château de Versailles',
    client: 'Sophie & Thomas',
    category: 'event',
    type: 'image',
    date: '2024-03-10',
    image: '/images/sample-3.jpg',
    thumb: '/images/sample-3.jpg',
    description: 'Couverture photo et vidéo d\'un mariage de luxe.'
  },
  {
    id: 4,
    title: 'Campagne Mode Printemps',
    client: 'Maison Élégance',
    category: 'photography',
    type: 'image',
    date: '2024-04-05',
    image: '/images/sample-4.jpg',
    thumb: '/images/sample-4.jpg',
    description: 'Shooting mode pour la collection printemps-été 2024.'
  },
  {
    id: 5,
    title: 'Documentaire Entreprise',
    client: 'Tech Innovations SA',
    category: 'clips',
    type: 'video',
    date: '2024-05-12',
    video: '/videos/corporate-doc.mp4',
    thumb: '/images/sample-5.jpg',
    image: '/images/sample-5.jpg',
    description: 'Vidéo corporate présentant l\'innovation technologique.'
  },
  {
    id: 6,
    title: 'Festival Jazz en Plein Air',
    client: 'Association Jazz & Co',
    category: 'event',
    type: 'image',
    date: '2024-06-22',
    image: '/images/sample-6.jpg',
    thumb: '/images/sample-6.jpg',
    description: 'Reportage photo d\'un festival de jazz estival.'
  },
  {
    id: 7,
    title: 'Architecture Urbaine',
    client: 'Projet Personnel',
    category: 'photography',
    type: 'image',
    date: '2024-07-18',
    image: '/images/sample-7.jpg',
    thumb: '/images/sample-7.jpg',
    description: 'Série photographique sur l\'architecture contemporaine.'
  },
  {
    id: 8,
    title: 'Clip Promotionnel Restaurant',
    client: 'Le Gourmet Parisien',
    category: 'clips',
    type: 'video',
    date: '2024-08-30',
    video: '/videos/restaurant-promo.mp4', // Vidéo locale
    thumb: '/images/sample-8.jpg', // Thumbnail
    image: '/images/sample-8.jpg', // Fallback
    description: 'Vidéo promotionnelle gastronomique haut de gamme.'
  },
  // Exemples avec vidéos YouTube/Vimeo
  {
    id: 9,
    title: 'Making-of Clip Musical',
    client: 'Behind The Scenes',
    category: 'clips',
    type: 'youtube',
    date: '2024-09-15',
    videoId: 'https://youtu.be/ZVJ5IVNHstg?si=JC2ucySlz5p1KZxh', // ID YouTube
    thumb: '/images/sample-9.jpg',
    image: '/images/sample-9.jpg',
    description: 'Coulisses de la production d\'un clip musical.'
  },
  {
    id: 10,
    title: 'Showreel 2024',
    client: 'Portfolio',
    category: 'clips',
    type: 'vimeo',
    date: '2024-10-01',
    videoId: '123456789', // ID Vimeo
    thumb: '/images/sample-10.jpg',
    image: '/images/sample-10.jpg',
    description: 'Compilation de mes meilleurs projets 2024.'
  }
]