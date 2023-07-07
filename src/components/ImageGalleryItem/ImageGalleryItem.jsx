import PropTypes from 'prop-types';

export const ImageGalleryItem = (image) => {
  return (
    <li class="gallery-item">
      <img src={image.src} alt={image.alt} />
    </li>
  );
};
