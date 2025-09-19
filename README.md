# Artisyn - AI-Powered Artisan Platform

Gen AI Exchange hackathon project - A comprehensive platform for discovering local artisans, enhancing product images with AI, and connecting craft communities.

### 🆕 New Features
- **Enhanced Artisan Locator**: Interactive Google Maps with custom markers for different artisan types
- **Smart Search**: Search by craft type, artisan name, or location with real-time filtering
- **User Location**: Automatic geolocation with smooth map transitions
- **Sample Artisans**: Pre-loaded with demo artisan locations in Boston area
- **Custom Markers**: Distinctive markers for artisans, user location, and search results
- **Info Windows**: Detailed artisan information with ratings and contact options

## Features

### 🎨 AI Image Enhancer
- **Fixed Backend Integration**: Now properly communicates with FastAPI backend
- Upload images (JPG, PNG, WebP up to 25MB)
- AI-powered enhancement with scaling and denoising
- Real-time before/after comparison slider
- Download enhanced images
- **Local Processing Option**: Canvas-based enhancement for privacy

### 🗺️ Artisan Locator (Google Maps)
- **Interactive map** showing local artisans with custom styling
- **Smart search** by craft type (ceramics, woodworking, glass, textiles)
- **User location detection** with smooth animations
- **Custom markers** for different content types
- **Detailed info windows** with artisan information and ratings
- **Mobile-responsive** design

### 💬 Community Features
- Feed for artisan posts and updates
- Forum for discussions
- Challenges and competitions
- Success stories
- Partner collaborations


## 🗺️ Google Maps Features

### Marker Types
- 🎨 **Artisan markers** (green): Local artisans with craft info
- 📍 **User location** (blue): Your current position
- 📍 **Search results** (yellow): General places from Google

### Search Examples
- **By craft**: "ceramics", "woodworking", "glass blowing"
- **By name**: "Boston Pottery", "Harbor Woodworks"
- **By location**: "Cambridge, MA", "downtown Boston"

### Sample Data
Demo artisans in Boston area:
- **Boston Pottery Studio** - Ceramics (4.8⭐)
- **Harbor Woodworks** - Woodworking (4.9⭐)
- **Cambridge Glass Art** - Glass Blowing (4.7⭐)
- **Textile Dreams** - Textile Arts (4.6⭐)

## 📁 File Structure

```
Artisyn/
├── 📄 index.html           # Main page with artisan locator
├── 🎨 ai-enhancer.html     # AI image enhancement tool  
├── ⚡ ai-enhancer.js       # Enhancement JavaScript (FIXED)
├── 🗺️ script.js           # Google Maps integration (NEW)
├── ⚙️ config.js           # API keys and settings (NEW)
├── 🎨 style.css           # Styling
├── 📚 README.md           # This file (UPDATED)
├── 🐍 backend/
│   ├── main.py            # FastAPI server (FIXED)
│   └── requirements.txt   # Python deps
└── 📁 assets/            # Images and resources
```

## 🚀 Next Steps

- [ ] Add more artisan sample data
- [ ] Implement user authentication
- [ ] Add artisan profile pages
- [ ] Connect to real artisan database
- [ ] Add booking/contact functionality
- [ ] Implement push notifications
- [ ] Add social sharing features

## 📝 License
Educational and demonstration purposes - Gen AI Exchange hackathon project.

Educational and demonstration purposes - Gen AI Exchange hackathon project.
