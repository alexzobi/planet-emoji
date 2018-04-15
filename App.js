import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Start working on your app! But don't expect it to work.</Text>
        <Text>Changes should automatically reload, but they don't.</Text>
        <Text>Shake your booty.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RootNavigator = StackNavigator({
  Main: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
      },
  }
});
