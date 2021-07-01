import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";
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

const AppBar = () => {
  return ( 
  <View style={styles.container}>
    <ScrollView horizontal>
      <Link to="/">
        <Text style={styles.flexItemA}>Repositories</Text>
      </Link>
      <Link to="/signin">
        <Text style={styles.flexItemA}>Sign in</Text>
      </Link>
    </ScrollView>
  </View>
  );
};

export default AppBar;