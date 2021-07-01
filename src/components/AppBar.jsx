import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Text, Pressable } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: theme.colors.appBarBackground
  },
  flexItemA: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold'
  }
});

const onPress= () => {
    console.log("regular");
};

const onPressOut = () => {
    console.log("out");
};

const longPress = () => {
    window.alert("heyy");
};

const AppBar = () => {
  return ( 
  <View style={styles.container}>
      <Pressable onLongPress={longPress} onPressOut={onPressOut} onPress={onPress}>
        <Text style={styles.flexItemA}>Repositories</Text>
      </Pressable>
  </View>
  );
};

export default AppBar;