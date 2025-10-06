const heroImages = [
    "assets/hero1.jpg",
    "assets/hero2.jpg",
    "assets/hero3.webp"
];

let currentImageIndex = 0;
const heroSection = document.querySelector(".hero");

function changeHeroBackground() {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
}

heroSection.style.backgroundImage = `url('${heroImages[0]}')`;
setInterval(changeHeroBackground, 6000);
