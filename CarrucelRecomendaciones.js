//Carrucel de Recomendaciones 
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track-recomendaciones');
    const items = document.querySelectorAll('.carousel-item-recomendaciones');
    const prevButton = document.querySelector('.carousel-prev-recomendaciones');
    const nextButton = document.querySelector('.carousel-next-recomendaciones');
    let currentIndex = 0;

    function updateCarousel() {
        const totalItems = items.length;
        const itemWidth = items[0].offsetWidth;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex >= items.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel(); // Inicializa el carrusel
});