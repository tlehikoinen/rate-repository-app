import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { useHistory } from 'react-router';
import { DELETE_REVIEW } from '../../graphql/mutations';
import { useMutation } from '@apollo/client';
import { AUTHORIZED_USER } from '../../graphql/queries';

const formatDate = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();

    let month = (1 + newDate.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    let day = newDate.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return day + '.' + month + '.' + year;
};

const MyReviewItem = ({ review }) => {
    const history = useHistory();

    const date = formatDate(review.createdAt);

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
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingBottom: 10,
        },
    });

    const handleRedirect = () => {
        history.push(review.repository.id);
    };
    
    const confirmDelete = () => {
        Alert.alert(
            "Delete review",
            "You really want to delete this review?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "DELETE", onPress: () => {deleteReview();} }
            ]
          );
      
    };

    const [mutate] = useMutation(DELETE_REVIEW);
  
    const deleteReview = async () => {
      try {
        const { data } = await mutate( { variables: { "id": `${review.id}` }, refetchQueries: [ { query: AUTHORIZED_USER, variables: {"includeReviews": true} }] });
        if(data) {
        history.push(`myreviews`);
    }
      } catch (e) {
        console.log(e);
      }
    };
  

    return (
      <View style={style.container}>
        <View style={style.rowContainer}>
            <Text style={style.pointsInBall}>{review.rating}</Text>
          <View style={style.columnContainer}>
            <Text fontWeight="bold">{review.repository.fullName}</Text>
            <Text fontColor="description">{date}</Text>
            <Text>{review.text}</Text>
          </View>
        </View>
        <View style={style.buttonContainer}>
            <Button onPress={handleRedirect} title="View repository"/>
            <Button onPress={confirmDelete} color={theme.colors.error} title="Delete review" />
        </View>
      </View>
    );
};
export default MyReviewItem;
