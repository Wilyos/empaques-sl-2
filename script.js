// Slider de frases (texto)
const track = document.getElementById('sliderTrack');
if (track) {
    track.innerHTML += track.innerHTML;
}

// Carousel de banners
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
let intervalId;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startAutoSlide() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 10000);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      console.log('Prev clicked');
        prevSlide();
        startAutoSlide();
    });
    nextBtn.addEventListener('click', () => {
       console.log('Next clicked');
        nextSlide();
        startAutoSlide();
    });
}

showSlide(currentSlide);
startAutoSlide();

console.log('Slides encontrados:', slides.length);
console.log('PrevBtn:', prevBtn);
console.log('NextBtn:', nextBtn);


const carouselContainer = document.querySelector('.carousel-container');
let productIndex = 0;
const cardsPerView = 3;

function slideProducts() {
  const cards = carouselContainer.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(carouselContainer).gap || 0);

  carouselContainer.style.transition = 'transform 0.6s cubic-bezier(.4,0,.2,1)';
  carouselContainer.style.transform = `translateX(-${cardWidth}px)`;

  setTimeout(() => {
    carouselContainer.style.transition = 'none';
    carouselContainer.appendChild(carouselContainer.firstElementChild);
    carouselContainer.style.transform = 'translateX(0)';
  }, 600);
}

let productInterval = setInterval(slideProducts, 3500);

carouselContainer.addEventListener('mouseenter', () => clearInterval(productInterval));
carouselContainer.addEventListener('mouseleave', () => productInterval = setInterval(slideProducts, 3500));