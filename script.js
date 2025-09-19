// Background globe now comes from an embedded Spline scene (in index.html script)

// Chart Supply
(() => {
  const ctx = document.getElementById('chartSupplyChains').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['7am', '8am', '9am'],
      datasets: [{ data: [30, 50, 80], backgroundColor: 'rgba(0,255,217,0.85)' }]
    },
    options: { plugins: { legend: { display: false } } }
  });
})();

// Chart Crafts
(() => {
  const ctx = document.getElementById('chartPopularCrafts').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['8am', '3pm'],
      datasets: [{ data: [20, 45], backgroundColor: 'rgba(0,255,217,0.8)' }]
    },
    options: { plugins: { legend: { display: false } } }
  });
})();

// No homepage-specific slider/enhancer logic; enhancer lives at ai-enhancer.html

// Google Map Init with Geolocation + Multiple Markers
window.initMap = function() {
  const defaultLocation = { lat: 42.3601, lng: -71.0589 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: defaultLocation,
    zoom: 12,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] }
    ]
  });

  let markers = [];

  // Default marker
  markers.push(new google.maps.Marker({
    position: defaultLocation,
    map: map,
    title: "Boston"
  }));

  // Try Geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(userLocation);
        map.setZoom(14);

        const userMarker = new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "You are here",
          icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }
        });

        markers.push(userMarker);
      },
      () => {
        console.warn("Geolocation denied or unavailable. Showing default (Boston).");
      }
    );
  }

  // Search box
  const input = document.querySelector(".search-input");
  const searchBox = new google.maps.places.SearchBox(input);

  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();
    if (!places || places.length === 0) return;

    // Clear old markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    const bounds = new google.maps.LatLngBounds();

    places.forEach(place => {
      if (!place.geometry || !place.geometry.location) return;

      const newMarker = new google.maps.Marker({
        map,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(newMarker);

      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    map.fitBounds(bounds);
  });
};
