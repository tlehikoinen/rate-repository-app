import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const RatingItem = ({ description, rating }) => {

    const styles = StyleSheet.create({
        container: {
          flexDirection: 'column'
        }
    });

    const ratingToShow = (rating < 1000) ? rating : `${(Math.round(10*rating/1000))/10}k`;


    return (
        <View style={styles.container}>
            <Text fontWeight='bold'>
                {ratingToShow}
            </Text>
            <Text color={theme.colors.textDescription}>
                {description}
            </Text>
        </View>

    );
};

export default RatingItem;