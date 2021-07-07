import React from 'react';
import FormikTextInput from '../FormikTextInput';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
    containers: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: 300,
      paddingHorizontal: 10,
      marginTop: 10,
    },
    buttonStyle: {
      }
  });

const ReviewForm = ({ onSubmit }) => {
    return (
      <View style={styles.containers}>
        <FormikTextInput name="ownerName" placeholder="Repository owner name is required" />
        <FormikTextInput name="repositoryName" placeholder="Repository name" />
        <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
        <FormikTextInput name="text" placeholder="Review" />
        <Button onPress={onSubmit} title="Create a review"/>
      </View>
    );

};

export default ReviewForm;