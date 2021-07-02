import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';

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

const RepositoryList = () => {

  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RenderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;