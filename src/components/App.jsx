import { Component } from 'react';
import { StyledAppContainer } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { PixabayAPI } from 'services/PixabayAPI';

const api = new PixabayAPI();

export class App extends Component {
  state = {
    pictures: [],
  };

  async getPictures({ searchQuery }) {
    api.query = searchQuery.toLowerCase().trim();
    api.perPage = 12;
    const pictures = await api.getPicturesByQuerry();
    this.setState({ pictures });
    console.log(this.state.pictures);
  }

  render() {
    const {pictures} = this.state;
    return (
      <StyledAppContainer>
        <SearchBar onSubmit={this.getPictures}></SearchBar>
        <ImageGallery pictures={pictures}></ImageGallery>
      </StyledAppContainer>
    );
  }
}
