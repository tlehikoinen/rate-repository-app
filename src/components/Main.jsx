import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

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
     <RepositoryList />
    </View>
    </>
  );
};

export default Main;