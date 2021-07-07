import React from 'react';
import { useParams } from 'react-router';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from '../RepositoryList/RepositoryItem';
import ReviewItem from './ReviewItem';
import theme from '../../theme';
import { FlatList, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    separator: {
      height: 10,
      backgroundColor: theme.colors.itemSeparator
    }
  });

const RenderReview = ( { review }) => <ReviewItem review={review} />;
  
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ( { repository }) => (
    <View>
      <RepositoryItem item={repository} singleView={true} />
      <ItemSeparator />
    </View>
);

const RepositorySingle = () => {

    const params = useParams();
    const { repository, loading } = useRepository(params.id);

    if (loading) {
        return null;
    }

    const reviews = repository.reviews.edges;
    
    return (
      <FlatList 
        data={reviews}
        renderItem={({item}) => <RenderReview review={item} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent= {() => <RepositoryInfo repository={repository} />}
      />
    );
};

export default RepositorySingle;


