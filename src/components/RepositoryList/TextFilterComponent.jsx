import React, {useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce/lib';
import { Searchbar } from 'react-native-paper';



const TextFilterComponent = ({setFilter}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery] = useDebounce(searchQuery, 500);

    useEffect(() => {
      setFilter(debouncedQuery);
    },[debouncedQuery]);
  
    const onChangeSearch = query => {
      setSearchQuery(query);
    };
  
    return (
      <Searchbar
        placeholder="Filter repositories"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    );
  };

  export default TextFilterComponent;