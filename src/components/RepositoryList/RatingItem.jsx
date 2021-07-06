import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

export const ratingHandler = (number) => {
    return (number< 1000) ? number: `${(Math.round(10*number/1000))/10}k`;
};

const RatingItem = ({ description, rating, testID }) => {

    const styles = StyleSheet.create({
        container: {
          flexDirection: 'column'
        }
    });

    const ratingToShow = ratingHandler(rating);

    return (
        <View style={styles.container} >
            <Text fontWeight='bold' testID={testID}>
                {ratingToShow}
            </Text>
            <Text color={theme.colors.textDescription}>
                {description}
            </Text>
        </View>

    );
};

export default RatingItem;