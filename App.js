import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/forms/Login';
import Navigation from './navigation/MainStack';

export default function App({navigation}) {
  return (
    // <Login navigation={navigation} />
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
