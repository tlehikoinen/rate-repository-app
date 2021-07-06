import React  from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import theme from '../../theme';

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

export const RepositoryListContainer = ( { repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={ItemSeparator}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id}
      />
    );
 
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;