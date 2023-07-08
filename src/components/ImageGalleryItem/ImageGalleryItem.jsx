import { StyledLi, StyledImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ imageSrc, imageAlt }) => {
  return (
    <StyledLi>
      <StyledImg src={imageSrc} alt={imageAlt} />
    </StyledLi>
  );
};

ImageGalleryItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};
