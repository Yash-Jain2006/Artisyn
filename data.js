// Seed data for Artisyn prototype
window.DATA = {
  artisans: [
    { id: 'a1', name: 'Meera Pottery', location: 'Kochi, IN', sustainable: true },
    { id: 'a2', name: 'Arun Woodworks', location: 'Goa, IN', sustainable: false },
    { id: 'a3', name: 'Lata Weaves', location: 'Jaipur, IN', sustainable: true },
    { id: 'a4', name: 'Suraj Brass', location: 'Pune, IN', sustainable: true },
  ],
  posts: [
    { id: 'p1', artisanId: 'a1', title: 'Hand-thrown clay pot', image: 'assets/artisan-pot.jpg', sustainable: true, likes: 48 },
    { id: 'p2', artisanId: 'a2', title: 'Sandalwood spoon set', image: '01.jpg', sustainable: false, likes: 22 },
    { id: 'p3', artisanId: 'a3', title: 'Indigo handloom scarf', image: 'AI-Image-Enhancer.jpeg', sustainable: true, likes: 61 },
    { id: 'p4', artisanId: 'a4', title: 'Engraved brass kalash', image: 'assets/artisan-pot.jpg', sustainable: true, likes: 37 },
  ],
  partners: [
    { id: 'pt1', name: 'Craft Co-op Kerala', type: 'Community', url: '#', blurb: 'Empowering rural artisans through collective bargaining.' },
    { id: 'pt2', name: 'EcoCommerce', type: 'Brand', url: '#', blurb: 'Showcasing eco-friendly local crafts.' },
  ],
  reels: [
    'AI-Image-Enhancer.jpeg',
    '01.jpg',
    'AI-Image-Enhancer.jpeg'
  ]
};
