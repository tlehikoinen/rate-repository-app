import React from 'react';
import { View, StyleSheet } from 'react-native';
import RatingItem from './RatingItem';

const Ratings = ( {stars, forks, reviews, rating} ) => {

    const styles = StyleSheet.create({
      container: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
        }
    });

    return (
        <View style={styles.container}>
          <RatingItem description='Stars' rating={stars} />
          <RatingItem description='Forks' rating={forks} />
          <RatingItem description='Reviews' rating={reviews} />
          <RatingItem description='Rating' rating={rating} />

        </View>
    );
};


export default Ratings;