import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Redirect, Route, Switch } from 'react-router-native';
import RepositoryList from './RepositoryList';
import RepositorySingle from './RepositorySingle';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Review from './Review';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <>
    <AppBar />
    <View style={styles.container}>
      <Switch>
        <Route path="/" exact>
          <RepositoryList/>
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/createreview">
          <Review />
        </Route>
        <Route path="/:id" >
          <RepositorySingle /> 
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
    </>
  );
};

export default Main;