import { StyledLi, StyledImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { imageSrc, imageAlt } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <StyledLi onClick={this.openModal}>
          <StyledImg src={imageSrc} alt={imageAlt} />
        </StyledLi>
        {isModalOpen && <Modal closeModal={this.closeModal} src={imageSrc} alt={imageAlt} />}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};