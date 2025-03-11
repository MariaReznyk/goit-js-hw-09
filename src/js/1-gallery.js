import images from './gallery.json';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function createGallery(images) {
  const galleryMarkup = images
    .map(({ preview, original, description }) => {
      return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img class="gallery-image" src="${preview}" alt="${description}" />
  </a>
</li>`;
    })
    .join('');

  document
    .querySelector('.js-gallery')
    .insertAdjacentHTML('beforeend', galleryMarkup);
}

createGallery(images);

const slOptions = {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};

new SimpleLightbox('.js-gallery a', slOptions);
