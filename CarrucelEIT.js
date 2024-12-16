//Carrucel de EIT
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track-EIT');
    const items = document.querySelectorAll('.carousel-item-EIT');
    const prevButton = document.querySelector('.carousel-prev-EIT');
    const nextButton = document.querySelector('.carousel-next-EIT');
    let currentIndex = 0;

    function updateCarousel() {
        const totalItems = items.length;
        const itemWidth = items[0].offsetWidth;
        const moveToIndex = currentIndex % totalItems;
        track.style.transform = `translateX(-${moveToIndex * itemWidth}px)`;
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

    updateCarousel(); // Inicia el carrusel
});




