import React from 'react';
import FormikTextInput from './FormikTextInput';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 200,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonStyle: {
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
      <View style={styles.container}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
        <Button onPress={onSubmit} title="Sign In"/>
      </View>
    );

};

export default SignInForm;