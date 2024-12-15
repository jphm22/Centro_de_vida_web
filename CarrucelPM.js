//Carrucel de PM
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track-PM');
    const items = document.querySelectorAll('.carousel-item-PM');
    const prevButton = document.querySelector('.carousel-prev-PM');
    const nextButton = document.querySelector('.carousel-next-PM');
    let currentIndex = 0;

    function updateCarousel() {
        const totalItems = items.length;
        const itemWidth = items[0].offsetWidth;
        const moveToIndex = currentIndex % totalItems;
        track.style.transform = `translateX(-${moveToIndex * itemWidth}px)`;
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? items.length - 3 : currentIndex - 3;
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex >= items.length - 3) ? 0 : currentIndex + 3;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel(); // Inicia el carrusel
});