import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeydown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };
  return (
    <div className="Overlay" onMouseDown={handleBackdropClick}>
      <div className="Modal">
        <img src={imageUrl} alt="Large version" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
