import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        borderColor: theme.colors.textSecondary,
        padding: 10
    },
    errorTextInput: {
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        borderColor: theme.colors.error,
        padding: 10
    },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style];

  if (error) {
    return <NativeTextInput style={styles.errorTextInput} {...props} />;
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;