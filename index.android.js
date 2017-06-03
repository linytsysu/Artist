/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import TensorFlowModule from './src/tensorflow/TensorFlow';

export default class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      version: '',
      size: '',
    };
    this.handleLaunchCameraPress = this.handleLaunchCameraPress.bind(this);
    this.handleLaunchLibraryPress = this.handleLaunchLibraryPress.bind(this);
  }

  componentDidMount() {
    TensorFlowModule.getVersion().then((data) => {
      this.setState({
        version: data,
        maxWidth: 1024,
        maxHeight: 1024,
      });
    });
  }

  handleLaunchCameraPress() {
    ImagePicker.launchCamera({
        noData: true,
        maxWidth: 1024,
        maxHeight: 1024,
      }, (response) => {
        TensorFlowModule.stylize(response.uri, 2).then((data) => {
          this.setState({
            size: data,
          });
        });
      });
  }

  handleLaunchLibraryPress() {
    ImagePicker.launchImageLibrary({
        noData: true,
      }, (response) => {
        TensorFlowModule.stylize(response.uri, 7).then((data) => {
          this.setState({
            size: data,
          });
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text>{this.state.version}</Text>
        <TouchableOpacity onPress={this.handleLaunchCameraPress}>
          <Text>launchCamera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleLaunchLibraryPress}>
          <Text>launchImageLibrary</Text>
        </TouchableOpacity>
        <Text>{this.state.size}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Artist', () => Artist);
