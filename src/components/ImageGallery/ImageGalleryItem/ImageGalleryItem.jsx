import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  handleOpenModal = () => {
    this.setState({ isOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <li
        className="ImageGalleryItem"
        id={this.props.id}
        onClick={this.handleOpenModal}
      >
        <img
          src={this.props.webformatURL}
          alt={this.props.user}
          className="ImageGalleryItem-image"
        />
        {this.state.isOpen && (
          <Modal
            imageUrl={this.props.webformatURL}
            onClose={this.handleCloseModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
