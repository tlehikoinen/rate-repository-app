import React, { useState }  from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import TextFilterComponent from './TextFilterComponent';
import DropdownFilterComponent from './DropdownFilterComponent';
import ItemSeparator from '../ItemSeparator';

const RenderItem = ({item}) => {
    return <RepositoryItem item={item} />;
};

const HeaderComponent = (setFilter, setSortMethod) => {
  return (
    <>
    <TextFilterComponent setFilter={setFilter} />
    <DropdownFilterComponent setSortMethod={setSortMethod} />
    </>
  );
};

export const RepositoryListContainer = ( { repositories, onEndReach, setFilter, setSortMethod }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={ItemSeparator}
        ListHeaderComponent={HeaderComponent(setFilter, setSortMethod)}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id}
      />
    );
 
};

const RepositoryList = () => {
  const [sortMethod, setSortMethod] = useState('');
  const [filter, setFilter] = useState('');
  const { repositories } = useRepositories(sortMethod, filter);

  const onEndReach = () => {
    console.log('You have reached the end of the list');
  };


  return <RepositoryListContainer repositories={repositories} onEndReach={onEndReach} setFilter={setFilter} setSortMethod={setSortMethod} />;
};

export default RepositoryList;