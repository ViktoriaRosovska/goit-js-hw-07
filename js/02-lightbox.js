import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

createImageGallery(galleryItems);

function createImageGallery(galleryItems) {
const markap = galleryItems.map(item => `<li class="gallery__item"><a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" 
        alt="${item.description}"></a></li>`).join("");
  
galleryList.insertAdjacentHTML('beforeend', markap);
}

let modalGallery = new SimpleLightbox('.gallery__link', {
  captionsData: "alt",
  captionDelay: 250,
});

modalGallery.on('show.simplelightbox', () => {
  galleryList.addEventListener('click', (e) => {
    e.preventDefault();
    
  });
});
