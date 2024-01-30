import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <li className="ImageGalleryItem" id={id} onClick={handleOpenModal}>
      <img src={webformatURL} alt={user} className="ImageGalleryItem-image" />
      {isOpen && <Modal imageUrl={webformatURL} onClose={handleCloseModal} />}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
