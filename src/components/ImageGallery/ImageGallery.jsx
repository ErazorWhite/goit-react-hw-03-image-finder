import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { StyledUl } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ pictures }) => {
  return (
    <StyledUl>
      {pictures.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            imageSrc={webformatURL}
            imageAlt={tags}
          ></ImageGalleryItem>
        );
      })}
    </StyledUl>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
};
