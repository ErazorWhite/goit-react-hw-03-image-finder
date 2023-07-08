import { Component } from 'react';
import { StyledAppContainer } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Buton/Button';
import { SearchBar } from './SearchBar/SearchBar';
import { PixabayAPI } from 'services/PixabayAPI';
import { Notify } from 'notiflix';
import { Loader } from './Loader/SkeletonImage';

const api = new PixabayAPI();
api.perPage = 12;
export class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    error: null,
  };

  getPictures = async ({ searchQuery }) => {
    try {
      this.setState({ isLoading: true });
      const normalizedSearchQuery = searchQuery.toLowerCase().trim();
      const isNewSearch = api.query !== normalizedSearchQuery;
      const { canLoadMore } = this;

      if (isNewSearch) {
        api.query = normalizedSearchQuery;
        api.page = 1;
      } else {
        if (canLoadMore()) {
          api.page++;
        } else {
          Notify.info("We're out of pictures, please try another search");
          return;
        }
      }

      const pictures = await api.getPicturesByQuerry();

      this.setState(
        prevState => ({
          pictures: isNewSearch
            ? pictures.hits
            : [...prevState.pictures, ...pictures.hits],
        }),
        () => {
          this.imagesNotFoundCheck();
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMoreClick = () => {
    this.getPictures({ searchQuery: api.query });
  };

  canLoadMore = () => api.totalHits > this.state.pictures.length;

  imagesNotFoundCheck = () => {
    if (this.state.pictures.length <= 0)
      Notify.warning("We didn't find the pictures you are looking for :(");
  };

  render() {
    const { pictures, isLoading } = this.state;
    const { canLoadMore } = this;

    return (
      <StyledAppContainer>
        <SearchBar onSubmit={this.getPictures} />
        <ImageGallery pictures={pictures} />
        {isLoading && <Loader count={api.perPage} />}
        {canLoadMore() && !isLoading && pictures.length > 0 && (
          <Button onClick={this.handleLoadMoreClick} />
        )}
      </StyledAppContainer>
    );
  }
}
