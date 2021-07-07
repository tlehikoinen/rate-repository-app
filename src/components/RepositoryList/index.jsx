import React, { useState }  from 'react';
import { FlatList, View, StyleSheet, } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import theme from '../../theme';
import TextFilterComponent from './TextFilterComponent';
import DropdownFilterComponent from './DropdownFilterComponent';


const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.itemSeparator
  }
});

const ItemSeparator = () => <View style={styles.separator} />;





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

export const RepositoryListContainer = ( { repositories, setFilter, setSortMethod }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={ItemSeparator}
        ListHeaderComponent={HeaderComponent(setFilter, setSortMethod)}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id}
      />
    );
 
};

const RepositoryList = () => {
  const [sortMethod, setSortMethod] = useState('');
  const [filter, setFilter] = useState('');
  const { repositories } = useRepositories(sortMethod, filter);

  return <RepositoryListContainer repositories={repositories} setFilter={setFilter} setSortMethod={setSortMethod} />;
};

export default RepositoryList;