import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

createImageGallery(galleryItems);

function createImageGallery(galleryItems) {
  let markap = '';
  for (let i = 0; i < galleryItems.length; i++) {
    markap += `<li class="image__item"><a class="gallery__link" href="${galleryItems[i].original}">
        <img class="gallery__image" src="${galleryItems[i].preview}" 
        data-source="${galleryItems[i].original}" alt="${galleryItems[i].description}"></a></li>`;
  }
  galleryList.insertAdjacentHTML('beforeend', markap);
}

galleryList.addEventListener('click', onModalOpen);
  
function onModalOpen(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const currentImage = galleryItems.find(el => e.target.src === el.preview);

  const instance = basicLightbox.create(
    `
    <div class="modal">
       <img src='${currentImage.original}' alt='${currentImage.description}'>
        
    </div>
`,
    {
      onShow: instance => {
        instance.element().querySelector('img').onclick = instance.close;
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    },
  );

  function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;
    if (isEscKey) {
      instance.close();
    }
  } 

  instance.show();
}

