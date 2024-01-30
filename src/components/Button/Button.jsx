import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button type="submit" className="Button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
