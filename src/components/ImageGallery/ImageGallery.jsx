import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ data }) => {
  const images = data.map(({ id, webformatURL, user, largeImageURL }) => (
    <ImageGalleryItem
      key={id}
      id={id}
      webformatURL={webformatURL}
      user={user}
      largeImageURL={largeImageURL}
    />
  ));

  return <ul className="ImageGallery">{images}</ul>;
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
