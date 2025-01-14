// select all images in the gallary
const gallaryImages = document.querySelectorAll('#gallary-container img');
const images = Array.from(gallaryImages); // convert nodeList to array
// select element for lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;// Track

// open lightbox and sychronize currentIndex when an image is clicked
images.forEach((image, index )=> {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src;
        lightbox.classList.add('visible');
    });
});

// Close lightbox when clicking outside the content
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
    lightbox.classList.remove('visible');
    }
});

//show next image in the lightbox
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
})


//show previous image in the lightbox
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
})


// Keyboard navigation for the lightbox
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex +1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    } else if (event.key === 'Cancel') {c   
        lightbox.classList,remove('visible');
    }
})