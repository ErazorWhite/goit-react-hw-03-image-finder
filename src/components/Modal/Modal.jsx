import { AiFillPropertySafety } from 'react-icons/ai';
import { Overlay, ModalWrapper } from './Modal.styled';
import PropTypes from 'prop-types'

export const Modal = ({ closeModal, src, alt }) => {
    const handleOverlayClick = () => {
        closeModal();
    };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWrapper>
        <img src={src} alt={alt} />
      </ModalWrapper>
    </Overlay>
  );
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}