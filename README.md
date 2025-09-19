# Artisyn - AI-Powered Artisan Platform

Gen AI Exchange hackathon project - A comprehensive platform for discovering local artisans, enhancing product images with AI, and connecting craft communities.

## 🚀 Recent Updates

### ✅ Fixed Issues
- **Image Enhancement Error**: Fixed "Failed to fetch" error in the AI Image Enhancer
- **Google Maps Integration**: Added comprehensive Google Maps integration to the Artisan Locator

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

## 🔧 Setup Instructions

### 1. Google Maps API Key (Required for Artisan Locator)

**Step 1: Get your API key**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable these APIs:
   - Maps JavaScript API
   - Places API
   - Geolocation API (optional)
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. **Restrict your API key** (recommended):
   - API restrictions: Select "Maps JavaScript API" and "Places API"
   - HTTP referrers: Add your domain (e.g., `localhost:*` for testing)

**Step 2: Configure the key**
1. Open `config.js`
2. Replace the placeholder:
   ```javascript
   GOOGLE_MAPS_API_KEY: 'your_actual_api_key_here'
   ```

**Step 3: Test it**
- Open `index.html` in your browser
- The Artisan Locator should show an interactive map
- Try searching for "ceramics" or "woodworking"

### 2. Backend Setup (For AI Image Enhancer)

**Step 1: Install dependencies**
```bash
cd backend
pip install -r requirements.txt
```

**Step 2: Start the server**
```bash
uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

**Step 3: Verify it's working**
- Visit http://127.0.0.1:8000/docs
- Try the image enhancer at `ai-enhancer.html`

### 3. Local Development

**Option A: Direct file access**
```bash
# Open index.html directly in browser
start index.html  # Windows
open index.html   # Mac
```

**Option B: Local server (recommended)**
```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```

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

## 🛠️ Troubleshooting

### Google Maps Issues
- **"API key required"**: Check `config.js` has your real API key
- **Gray map**: Enable Maps JavaScript API in Google Cloud Console
- **No search results**: Enable Places API
- **Console errors**: Check API key restrictions and quotas

### Image Enhancer Issues
- **"Failed to fetch"**: ✅ **FIXED** - Make sure backend is running on port 8000
- **Upload fails**: Check file size (25MB max) and format (JPG/PNG/WebP)
- **CORS errors**: Use local server instead of file:// URLs

### General Issues
- **Broken links**: Make sure all files are in the correct locations
- **JavaScript errors**: Check browser console (F12)
- **Mobile issues**: Ensure responsive design is working

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

## 🔐 Security Notes

- **Never commit API keys** to public repositories
- **Restrict API keys** to specific domains in production
- **Monitor usage** in Google Cloud Console to avoid unexpected charges
- **Set billing alerts** for your Google Cloud project

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
