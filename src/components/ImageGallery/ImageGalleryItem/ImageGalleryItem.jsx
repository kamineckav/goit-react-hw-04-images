import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ImageGalleryItem = ({ user, webformatURL, id, largeImageURL }) => {
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
      {isOpen && <Modal imageUrl={largeImageURL} onClose={handleCloseModal} />}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
