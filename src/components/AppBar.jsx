import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";
import theme from '../theme';
import { useApolloClient, useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';



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

  const apolloClient = useApolloClient();
  const { data }  = useQuery(AUTHORIZED_USER);
  const authStorage = useAuthStorage();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return ( 
  <View style={styles.container}>
    <ScrollView horizontal>
      <Link to="/">
        <Text style={styles.flexItemA}>Repositories</Text>
      </Link>
      {data?.authorizedUser !== null ? 
      <>
        <Link to="/createreview">
          <Text style={styles.flexItemA}>Create a review</Text>
        </Link>
        <Link onPress={logout}>
          <Text style={styles.flexItemA}>Logout</Text>
        </Link>  
      </> : 
      <Link to="/signin">
        <Text style={styles.flexItemA}>Sign in</Text>
      </Link> }
    </ScrollView>
  </View>
  );
};

export default AppBar;