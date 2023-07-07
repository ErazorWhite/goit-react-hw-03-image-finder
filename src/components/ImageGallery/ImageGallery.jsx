import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ pictures }) => {
  return (
    <ul>
      {pictures.map(picture => {
        console.log('picture: ', picture);
        return (
          <ImageGallery
            imageSrc={picture.pageUrl}
            imageAlt={picture.tags}
          ></ImageGallery>
        );
      })}
    </ul>
  );
};
