import React from 'react';
import { FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../../graphql/queries';
import MyReviewItem from './MyReviewItem';
import ItemSeparator from '../ItemSeparator';


const MyReviews = () => {

const { data } = 
    useQuery(AUTHORIZED_USER, { variables: {"includeReviews": true}, fetchPolicy: 'cache-and-network' });

    const reviews = data?.authorizedUser.reviews;

    const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

    const renderItem = ({ item }) => {
        return <MyReviewItem review={item} />;
    };
    
  return (
    <FlatList 
    data={reviewNodes}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={ItemSeparator}
    />

  );
};

export default MyReviews;