// Configuration file for API keys and settings
// IMPORTANT: Replace with your actual Google Maps API key
const CONFIG = {
  GOOGLE_MAPS_API_KEY: 'YOUR_GOOGLE_MAPS_API_KEY_HERE',
  
  // Map settings
  MAP_CONFIG: {
    DEFAULT_LOCATION: { lat: 42.3601, lng: -71.0589 }, // Boston
    DEFAULT_ZOOM: 12,
    USER_LOCATION_ZOOM: 13,
    
    // Map styling
    DARK_THEME: true,
    
    // Features
    ENABLE_GEOLOCATION: true,
    ENABLE_SEARCH: true,
    ENABLE_ARTISAN_MARKERS: true
  },
  
  // Artisan data - in a real app, this would come from a database
  SAMPLE_ARTISANS: [
    { 
      lat: 42.3601, lng: -71.0589, 
      name: "Boston Pottery Studio", 
      craft: "Ceramics", 
      description: "Handcrafted pottery and ceramic art",
      rating: 4.8,
      contact: { phone: "(555) 123-4567", email: "info@bostonpottery.com" }
    },
    { 
      lat: 42.3505, lng: -71.0365, 
      name: "Harbor Woodworks", 
      craft: "Woodworking", 
      description: "Custom furniture and wood art pieces",
      rating: 4.9,
      contact: { phone: "(555) 987-6543", email: "hello@harborwood.com" }
    },
    { 
      lat: 42.3736, lng: -71.1097, 
      name: "Cambridge Glass Art", 
      craft: "Glass Blowing", 
      description: "Beautiful handblown glass creations",
      rating: 4.7,
      contact: { phone: "(555) 246-8135", email: "art@cambridgeglass.com" }
    },
    { 
      lat: 42.3467, lng: -71.0972, 
      name: "Textile Dreams", 
      craft: "Textile Arts", 
      description: "Handwoven textiles and fiber art",
      rating: 4.6,
      contact: { phone: "(555) 369-2580", email: "weave@textiledreams.com" }
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} else {
  window.CONFIG = CONFIG;
}