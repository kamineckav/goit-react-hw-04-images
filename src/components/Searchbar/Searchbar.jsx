import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value.toLowerCase().trim();
    onSubmit(inputValue);
    e.currentTarget.reset();
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M21.707 20.293l-5.84-5.84C16.217 13.372 17 11.79 17 10c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8c1.79 0 3.372-.783 4.453-2.02l5.84 5.84c.195.195.451.293.707.293s.512-.098.707-.293c.39-.39.39-1.022 0-1.414zM2 10c0-3.313 2.687-6 6-6s6 2.687 6 6-2.687 6-6 6-6-2.687-6-6z" />
          </svg>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
