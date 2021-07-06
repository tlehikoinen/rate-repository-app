import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Info from './Info';
import SingleViewAdditions from './SingleViewAdditions';
import Ratings from './Ratings';
import { useHistory } from 'react-router';

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    margin: 15,
  },
});


const RepositoryItem = ( { item, singleView }) => {
  const history = useHistory();

  const logInfo = () => {
    history.push(item.id);
  };

    return (
      <Pressable onPress={logInfo}>
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
            rating={item.ratingAverage} />
          {singleView ? 
          <SingleViewAdditions item={item}/> : null }
        </View>
      </Pressable>
    );
};


export default RepositoryItem;