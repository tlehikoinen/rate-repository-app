import React from 'react';
import { View, StyleSheet } from 'react-native';
import Info from './Info';
import Ratings from './Ratings';

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    margin: 15,
  },
});



const RepositoryItem = ( { item }) => {
    return (
      <View style={styles.itemContainer}>
        <Info 
          fullName={item.fullName} 
          description={item.description} 
          language={item.language}
          avatar={item.ownerAvatarUrl} 
        />
        <Ratings 
          stars={item.stargazersCount} 
          forks={item.forksCount}
          reviews={item.reviewCount}
          rating={item.ratingAverage}/>
      </View>
    );
};


export default RepositoryItem;