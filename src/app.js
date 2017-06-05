import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ArtistNavigator from './navigator';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ArtistNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
