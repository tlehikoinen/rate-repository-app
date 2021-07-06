import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';


const formatDate = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();

    let month = (1 + newDate.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    let day = newDate.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return day + '.' + month + '.' + year;
};



const ReviewItem = ({ review }) => {

    const date = formatDate(review.node.createdAt);

    const style = StyleSheet.create({
        container: {
            display: 'flex',
            marginLeft: 20,
        },
        rowContainer: {
            flexDirection: 'row',
            marginTop: 10
        },
        columnContainer: {
            flexDirection: 'column',
            paddingLeft: 10,
            maxWidth: 300,
            marginBottom: 10
        },
        pointsInBall: {
            height: 60,
            width: 60,
            borderStyle: 'solid',
            borderColor: theme.colors.primary,
            color: theme.colors.primary,
            borderWidth: 5,
            borderRadius: 30,
            display: 'flex',
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 30
        },
    });

    return (
      <View style={style.container}>
        <View style={style.rowContainer}>
            <Text style={style.pointsInBall}>{review.node.rating}</Text>
          <View style={style.columnContainer}>
            <Text fontWeight="bold">{review.node.user.username}</Text>
            <Text fontColor="description">{date}</Text>
            <Text>{review.node.text}</Text>
          </View>
        </View>
      </View>
    );
};

export default ReviewItem;