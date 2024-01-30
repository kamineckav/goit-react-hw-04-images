import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { Component } from 'react';
import fetchImg from './helpers/api';

class App extends Component {
  state = {
    gallery: [],
    page: 1,
    textFind: '',
    perPage: 12,
    isLoad: false,
    totalHits: 0,
  };

  handleTextSubmit = value => {
    if (!value) return;

    this.setState({
      textFind: value,
      gallery: [],
      page: 1,
      isLoad: false,
      totalHits: 0,
    });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.textFind !== this.state.textFind ||
      prevState.page !== this.state.page
    ) {
      const selectPage = this.state.page;
      this.setState({ isLoad: true });

      fetchImg(selectPage, this.state.textFind, this.state.perPage)
        .then(data => {
          this.setState(prev => ({
            gallery: [...prev.gallery, ...data.hits],
            page: selectPage,
            totalHits: data.totalHits,
          }));
        })
        .catch(e => console.error('API Error:', e))
        .finally(() => {
          this.setState({ isLoad: false });
        });
    }
  }

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1, isLoad: true }));
  };

  render() {
    const { isLoad, gallery, totalHits, page, perPage } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleTextSubmit} />
        <ImageGallery data={gallery} />
        {isLoad && <Loader />}
        {gallery.length > 0 && totalHits > page * perPage && !isLoad && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
