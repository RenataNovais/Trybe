// implement SearchBar component here
import React from 'react';
import Bookmarked from './Bookmarked';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      selectedGenre,
      bookmarkedOnly,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form className="searchBar-container">
        <div className="input-group">
          <label htmlFor="searchText">Inclui o texto:</label>
          <input id="searchText" type="text" value={searchText} onChange={onSearchTextChange} />
        </div>
        <div>
          <Bookmarked checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </div>
        <div className="input-group">
          <label htmlFor="genre">Filtrar por gênero:</label>
          <select id="genre" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchBar;
