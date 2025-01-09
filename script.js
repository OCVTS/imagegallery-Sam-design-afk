const gallaryImages = document.querySelectorAll('#gallary-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

gallaryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.src = image.src;
        lightbox.classList.add('visible');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
});