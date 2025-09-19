// ==== Elements ====
const uploadInput = document.getElementById("upload");
const canvasBefore = document.getElementById("before");
const canvasAfter = document.getElementById("after");
const ctxBefore = canvasBefore.getContext("2d");
const ctxAfter = canvasAfter.getContext("2d");

const rangeSlider = document.getElementById("range");
const clipDiv = document.getElementById("clip");
const handle = document.getElementById("handle");

const btnEnhance = document.getElementById("btnEnhance");
const btnAiEnhance = document.getElementById("btnAiEnhance");
const btnReset = document.getElementById("btnReset");
const btnDownload = document.getElementById("btnDownload");
const btnApplyCustom = document.getElementById("btnApplyCustom");
const processingOverlay = document.getElementById("processingOverlay");

// Sliders
const brightnessSlider = document.getElementById("brightness");
const contrastSlider = document.getElementById("contrast");
const sharpnessSlider = document.getElementById("sharpness");
const denoiseSlider = document.getElementById("denoise");
const saturationSlider = document.getElementById("saturation");
const whiteBalanceSlider = document.getElementById("whiteBalance");

let originalImage = null;

// ==== Load Image ====
uploadInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      canvasBefore.width = img.naturalWidth;
      canvasBefore.height = img.naturalHeight;
      canvasAfter.width = img.naturalWidth;
      canvasAfter.height = img.naturalHeight;

      // Original in "before" canvas
      ctxBefore.drawImage(img, 0, 0, canvasBefore.width, canvasBefore.height);

      // Start with same in "after" canvas
      ctxAfter.drawImage(img, 0, 0, canvasAfter.width, canvasAfter.height);

      originalImage = img;
      // Ensure slider defaults to 50% (middle)
      rangeSlider.value = 50;
      clipDiv.style.width = '50%';
      handle.style.left = '50%';
      processingOverlay.classList.remove("active");
    };
    
    processingOverlay.classList.add("active");
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// ==== Sample image click (loads embedded sample) ====
const sampleImg = document.getElementById('sampleImg');
if (sampleImg) {
  sampleImg.addEventListener('click', () => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      canvasBefore.width = img.naturalWidth;
      canvasBefore.height = img.naturalHeight;
  canvasAfter.width = img.naturalWidth;
  canvasAfter.height = img.naturalHeight;

  ctxBefore.drawImage(img, 0, 0, canvasBefore.width, canvasBefore.height);
  ctxAfter.drawImage(img, 0, 0, canvasAfter.width, canvasAfter.height);

  originalImage = img;

  // Keep slider at default (already set elsewhere)
    rangeSlider.value = 50;
    clipDiv.style.width = '50%';
    handle.style.left = '50%';
  processingOverlay.classList.remove('active');
    };

    // Use the same src as the thumbnail to ensure consistency
    img.src = sampleImg.src;
  });
}

// ==== Before/After Slider ====
rangeSlider.addEventListener("input", () => {
  const value = rangeSlider.value;
  clipDiv.style.width = `${value}%`;
  handle.style.left = `${value}%`;
});

// ==== Presets ====
const presetButtons = document.querySelectorAll(".preset-buttons button");
presetButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    presetButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyPreset(btn.dataset.preset);
  });
});

function applyPreset(preset) {
  switch (preset) {
    case "portrait":
      brightnessSlider.value = 5;
      contrastSlider.value = 1.1;
      sharpnessSlider.value = 1.2;
      saturationSlider.value = 1.2;
      break;
    case "landscape":
      brightnessSlider.value = 10;
      contrastSlider.value = 1.2;
      sharpnessSlider.value = 1.1;
      saturationSlider.value = 1.3;
      break;
    case "product":
      brightnessSlider.value = 8;
      contrastSlider.value = 1.15;
      sharpnessSlider.value = 1.4;
      saturationSlider.value = 1.1;
      break;
    default:
      brightnessSlider.value = 0;
      contrastSlider.value = 1;
      sharpnessSlider.value = 1;
      saturationSlider.value = 1;
  }
}

// ==== Apply Custom Enhancements ====
btnApplyCustom.addEventListener("click", () => {
  if (!originalImage) return;
  processingOverlay.classList.add("active");

  const brightness = parseInt(brightnessSlider.value, 10);
  const contrast = parseFloat(contrastSlider.value);
  const saturation = parseFloat(saturationSlider.value);
  const whiteBalance = parseFloat(whiteBalanceSlider.value);

  ctxAfter.clearRect(0, 0, canvasAfter.width, canvasAfter.height);
  ctxAfter.drawImage(originalImage, 0, 0, canvasAfter.width, canvasAfter.height);

  let imageData = ctxAfter.getImageData(0, 0, canvasAfter.width, canvasAfter.height);
  let data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    // brightness & contrast
    data[i] = truncate((data[i] + brightness) * contrast);
    data[i + 1] = truncate((data[i + 1] + brightness) * contrast);
    data[i + 2] = truncate((data[i + 2] + brightness) * contrast);

    // saturation
    let gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = truncate(gray + (data[i] - gray) * saturation);
    data[i + 1] = truncate(gray + (data[i + 1] - gray) * saturation);
    data[i + 2] = truncate(gray + (data[i + 2] - gray) * saturation);

    // white balance (simple blue reduction)
    data[i + 2] = truncate(data[i + 2] * whiteBalance);
  }

  ctxAfter.putImageData(imageData, 0, 0);
  processingOverlay.classList.remove("active");
});

function truncate(val) {
  return Math.min(255, Math.max(0, val));
}

// ==== Reset ====
btnReset.addEventListener("click", () => {
  if (!originalImage) return;
  ctxBefore.drawImage(originalImage, 0, 0, canvasBefore.width, canvasBefore.height);
  ctxAfter.drawImage(originalImage, 0, 0, canvasAfter.width, canvasAfter.height);
  // Reset slider to the default of 100%
  // Reset slider to the default of 50%
  rangeSlider.value = 50;
  clipDiv.style.width = "50%";
  handle.style.left = "50%";
});

// ==== Download ====
btnDownload.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "enhanced-image.png";
  link.href = canvasAfter.toDataURL("image/png");
  link.click();
});

// ==== Auto Enhance ====
btnEnhance.addEventListener("click", () => {
  btnApplyCustom.click();
});

// ==== AI Super Resolution (backend call) ====
btnAiEnhance.addEventListener("click", async () => {
  if (!originalImage) return;
  processingOverlay.classList.add("active");

  try {
    const response = await fetch("http://localhost:5000/api/enhance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "Super resolve this image" }), // placeholder
    });

    const data = await response.json();

    if (data.enhanced) {
      // For now, just show result as alert (later we’ll plug into canvas)
      alert("AI Enhanced: " + data.enhanced);
    } else {
      alert("Error from server.");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to connect to backend.");
  } finally {
    processingOverlay.classList.remove("active");
  }
});
