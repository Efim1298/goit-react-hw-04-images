import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchForm, SearchInput, SearchButton } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      toast.warn('Please enter the name for search!');
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton>
          <MdSearch style={{ width: 25, height: 25 }} />
        </SearchButton>
        <SearchInput
          name="searchName"
          type="text"
          id="search"
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
