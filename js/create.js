// ------------------ BOBR CREATOR SCRIPT ------------------

// Default images for preview + reset
const defaultImages = {
    Background: "../img/Background/Green_background.png",
    BOBR: "../img/bobr/Normal_Bobr.png",
    Outfit: "",
    Accessory: "",
    Eyewear: "",
    Headwear: "",
    Moanimals: "",
};

// Define category image data
const imageData = {
    Background: [
        "../img/Background/Green_background.png",
        "../img/Background/blue_background.png",
        "../img/Background/hero-background.png",
        "../img/Background/Karma_background.png",
        "../img/Background/LightBlue_background.png",
        "../img/Background/monad_background.png",
        "../img/Background/purple_background.png",
        "../img/Background/Red_background.png",
        "../img/Background/vietnam_background.png",
        "../img/Background/Yellow_background.png",
    ],
    BOBR: [
        "../img/bobr/Normal_Bobr.png",
        "../img/bobr/Angry_Bobr.png",
        "../img/bobr/Goofy_Bobr.png",
        "../img/bobr/Happy_Bobr.png",
        "../img/Bobr/Mafia_Bobr.png",
        "../img/Bobr/Sad_Bobr.png",
        "../img/Bobr/Normal_Bobr.png",
        "../img/Bobr/Unimpressed_Bobr.png",
    ],
    Outfit: [
        "../img/Outfit/Blue_Hoodie.png",
        "../img/Outfit/Blue_Puffer_Jacket.png",
        "../img/Outfit/BOBR_outfit_1.png",
        "../img/Outfit/BOBR_outfit_2.png",
        "../img/Outfit/BOBR_outfit_3.png",
        "../img/Outfit/BOBR_outfit_4.png",
        "../img/Outfit/BOBR_outfit_5.png",
        "../img/Outfit/BOBR_outfit_6.png",
        "../img/Outfit/BOBR_outfit_7.png",
        "../img/Outfit/BOBR_outfit_8.png",
        "../img/Outfit/Brody_oufit.png",
        "../img/Outfit/Causal_outfit.png",
        "../img/Outfit/ChocoBear_outfit.png",
        "../img/outfit/Cyan_Sports_Bib.png",
        "../img/Outfit/Dark_Blue_suit.png",
        "../img/Outfit/Dark_Green_suit.png",
        "../img/Outfit/Dark_Purple_suit.png",
        "../img/Outfit/Demon_outfit.png",
        "../img/Outfit/Green_Puffer_Jacket.png",
        "../img/Outfit/Green_Sports_Bib.png",
        "../img/Outfit/Icy_Puffer_Jacket.png",
        "../img/Outfit/Issei_outfit.png",
        "../img/Outfit/John_outfit.png",
        "../img/Outfit/JudoChy_outfit.png",
        "../img/Outfit/Leys_outfit.png",
        "../img/Outfit/Light_Orange_Hoodie.png",
        "../img/Outfit/Light_Purple_Shirt.png",
        "../img/Outfit/LightRed_Puffer_Jacket.png",
        "../img/Outfit/ManWithoutPlan_outfit.png",
        "../img/Outfit/Ninja_outfit.png",
        "../img/Outfit/Pink_Hoodie.png",
        "../img/Outfit/Pita_outfit.png",
        "../img/Outfit/Potato_outfit.png",
        "../img/Outfit/Purple_Hoodie.png",
        "../img/Outfit/Purple_Puffer_Jacket.png",
        "../img/Outfit/Purple_Sports_Bib.png",
        "../img/Outfit/Sachin_outfit.png",
        "../img/Outfit/Torzykk_outfit.png",
        "../img/Outfit/Vietnam_outfit.png",
        "../img/Outfit/Vinni_outfit.png",
    ],
    Accessory: [
        "../img/Accessory/Active_accessory.png",
        "../img/Accessory/blue_headphone.png",
        "../img/Accessory/Brody_accessory.png",
        "../img/Accessory/Brody_sword.png",
        "../img/Accessory/Calimero_accessory.png",
        "../img/Accessory/ChocoBear_accessory.png",
        "../img/Accessory/grey_headphone.png",
        "../img/Accessory/Grid_accessory.png",
        "../img/Accessory/JudoChy_mustache.png",
        "../img/Accessory/Koza_accessory.png",
        "../img/Accessory/Laptop.png",
        "../img/Accessory/Leys_accessory.png",
        "../img/Accessory/Lolipop.png",
        "../img/Accessory/Mizzen_accessory.png",
        "../img/Accessory/Pita_accessory.png",
        "../img/Accessory/Rattibenz_accessory.png",
        "../img/Accessory/red_headphone.png",
        "../img/Accessory/Sachin_accessory.png",
        "../img/Accessory/SimonBenjamin_accessory.png",
        "../img/Accessory/SimonBenjamin_sticker.png",
        "../img/Accessory/Sungod_accessory.png",
        "../img/Accessory/Wale_accessory.png",
        "../img/Accessory/Watermelon.png",
        "../img/Accessory/Yoda_light_saber.png",
    ],
    Eyewear: [
        "../img/Eyewear/ChocoBear_eyewear.png",
        "../img/Eyewear/Koza_eyewear.png",
        "../img/Eyewear/Vinni_eyewear.png",
    ],
    Headwear: [
        "../img/Headwear/Blue_cap.png",
        "../img/Headwear/Blue_hair.png",
        "../img/Headwear/Brody_headwear.png",
        "../img/Headwear/Brown_cap.png",
        "../img/Headwear/Brown_hair.png",
        "../img/Headwear/Cyan_cap.png",
        "../img/Headwear/Demon_headwear.png",
        "../img/Headwear/Green_cap.png",
        "../img/Headwear/Green_hair.png",
        "../img/Headwear/Grid_headwear.png",
        "../img/Headwear/Issei_headwear.png",
        "../img/Headwear/John_headwear.png",
        "../img/Headwear/JudoChy_headwear.png",
        "../img/Headwear/Koza_headwear.png",
        "../img/Headwear/Leys_headwear.png",
        "../img/Headwear/ManWithoutPlan_headwear.png",
        "../img/Headwear/Ninja_headwear.png",
        "../img/headwear/Pita_headwear.png",
        "../img/Headwear/Potato_headwear.png",
        "../img/Headwear/Purple_cap.png",
        "../img/Headwear/Purple_hair.png",
        "../img/Headwear/Sachin_headwear.png",
        "../img/Headwear/Vietnam_headwear.png",
        "../img/Headwear/Wale_headwear.png",
        "../img/Headwear/Yellow_cap.png",
    ],
    Moanimals: [
        "../img/Moanimal/Chog.png",
        "../img/Moanimal/Molandak.png",
        "../img/Moanimal/Mouch.png",
        "../img/Moanimal/Moyaki.png",
        "../img/Moanimal/Salmond.png",
        "../img/Moanimal/Wale.png",
    ],
};

// ------------------ DOM ELEMENTS ------------------

const categoryButtons = document.querySelectorAll(".category-button");
const optionsContainer = document.getElementById("options");
const preview = document.getElementById("preview");
const scrollbar = document.getElementById("custom-scrollbar");

const downloadBtn = document.getElementById("download");
const copyBtn = document.getElementById("copy");
const resetBtn = document.getElementById("reset");

// ------------------ INITIAL PREVIEW ------------------
function initializePreview() {
    for (let key in defaultImages) {
        const img = document.getElementById(key);
        if (img && defaultImages[key]) {
            img.src = defaultImages[key];
        }
    }
}
initializePreview();

// ------------------ LOAD OPTIONS ------------------

function loadOptions(category) {
    optionsContainer.innerHTML = ""; // clear existing

    imageData[category].forEach((src) => {
        const div = document.createElement("div");
        div.classList.add("option-img");
        const img = document.createElement("img");
        img.src = src;

        img.addEventListener("click", () => {
            // update preview image layer
            const layer = document.getElementById(category);
            if (layer) {
                layer.src = src;
            }

            // mark selected
            optionsContainer
                .querySelectorAll("img")
                .forEach((i) => i.classList.remove("selected"));
            img.classList.add("selected");
        });

        div.appendChild(img);
        optionsContainer.appendChild(div);
    });

    updateScrollbar(); // update scrollbar size after loading
}

// ------------------ CATEGORY SWITCH ------------------

categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        document
            .querySelector(".category-button.active")
            ?.classList.remove("active");
        btn.classList.add("active");
        const category = btn.dataset.category;
        loadOptions(category);
    });
});

// Load first category initially
loadOptions("Background");

// ------------------ CUSTOM SCROLLBAR (Smooth Version) ------------------

let isDragging = false;
let startY = 0;
let startTop = 0;
let rafId = null;

function updateScrollbar() {
    const contentHeight = optionsContainer.scrollHeight;
    const visibleHeight = optionsContainer.clientHeight;
    const scrollbarHeight = Math.max((visibleHeight / contentHeight) * visibleHeight, 20);
    const scrollRatio = optionsContainer.scrollTop / (contentHeight - visibleHeight);
    const trackHeight = scrollbar.parentElement.offsetHeight - scrollbarHeight;

    scrollbar.style.height = `${scrollbarHeight}px`;
    scrollbar.style.top = `${scrollRatio * trackHeight}px`;
}

function smoothScrollUpdate() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
        updateScrollbar();
    });
}

// Update when scrolling or resizing
optionsContainer.addEventListener("scroll", smoothScrollUpdate);
window.addEventListener("resize", updateScrollbar);

// Enable dragging
scrollbar.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    startTop = parseFloat(getComputedStyle(scrollbar).top);
    document.body.style.userSelect = "none";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    const contentHeight = optionsContainer.scrollHeight;
    const visibleHeight = optionsContainer.clientHeight;
    const scrollbarHeight = scrollbar.offsetHeight;
    const trackHeight = scrollbar.parentElement.offsetHeight - scrollbarHeight;

    // Limit scrollbar position within track
    let newTop = Math.min(Math.max(startTop + deltaY, 0), trackHeight);
    scrollbar.style.top = `${newTop}px`;

    // Convert scrollbar position to content scrollTop
    const scrollPercent = newTop / trackHeight;
    const targetScroll = scrollPercent * (contentHeight - visibleHeight);

    // Smooth animation when dragging
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
        optionsContainer.scrollTop = targetScroll;
    });
});

// Initialize
updateScrollbar();



// ------------------ SAVE / COPY / RESET ------------------
async function combineImages() {
    const layers = preview.querySelectorAll("img");
    const firstLayer = layers[0];
    if (!firstLayer || !firstLayer.src) return null;

    // Get natural image size
    const tempImg = new Image();
    tempImg.src = firstLayer.src;
    await tempImg.decode(); // wait to load
    const width = tempImg.naturalWidth;
    const height = tempImg.naturalHeight;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    for (let layer of layers) {
        if (layer.src) {
            const img = new Image();
            img.src = layer.src;
            await img.decode();
            ctx.drawImage(img, 0, 0, width, height);
        }
    }
    return canvas;
}

downloadBtn.addEventListener("click", async () => {
    const canvas = await combineImages();
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "bobr.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("✅ Image downloaded successfully!");
});

copyBtn.addEventListener("click", async () => {
    const canvas = await combineImages();
    if (!canvas) return;
    canvas.toBlob((blob) => {
        navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
            .then(() => showToast("📋 Image copied to clipboard!"))
            .catch(() => showToast("⚠️ Copy failed!"));
    });
});

resetBtn.addEventListener("click", () => {
    preview.querySelectorAll("img").forEach((img) => {
        if (img.id === "Background") {
            img.src = "../img/Background/Green_background.png";
        } else if (img.id === "BOBR") {
            img.src = "../img/Bobr/Normal_Bobr.png";
        } else {
            img.src = "../img/Bobr/Normal_Bobr.png";
        }
    });

    optionsContainer.querySelectorAll("img").forEach((i) => i.classList.remove("selected"));
});

// ------------------ TOAST MESSAGE FUNCTION ------------------

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timeout);
    showToast.timeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500); // disappears after 2.5 seconds
}


