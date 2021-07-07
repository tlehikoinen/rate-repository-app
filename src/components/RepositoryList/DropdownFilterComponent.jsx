import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce/lib';
import { Picker } from '@react-native-picker/picker';

const DropdownFilterComponent = ({ setSortMethod }) => {

    const [selected, setSelected] = useState("");
    const [value] = useDebounce(selected, 500);
  
    useEffect(() => {
      setSortMethod(value);
    },[value]);
  
    return (
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => {
          setSelected(itemValue);
        }
        }>
        <Picker.Item label="Latest repositories" value="DEFAULT" />
        <Picker.Item label="Highest rated repositories" value="HIGHEST_RATED" />
        <Picker.Item label="Lowest rated repositories" value="LOWEST_RATED" />
      </Picker>
    );
  };

  
  export default DropdownFilterComponent;