from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from PIL import Image, ImageEnhance, ImageFilter
import io

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development, allow all. Restrict in production.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/enhance")
async def enhance_image(
    image: UploadFile = File(...),
    scale: int = Form(2),
    denoise: bool = Form(False)
):
    contents = await image.read()
    img = Image.open(io.BytesIO(contents)).convert("RGB")

    # Simple upscaling
    w, h = img.size
    img = img.resize((w * scale, h * scale), Image.LANCZOS)

    # Denoise (simple blur for demo)
    if denoise:
        img = img.filter(ImageFilter.GaussianBlur(radius=1))

    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return Response(content=buf.getvalue(), media_type="image/png")
