import React, { Component } from 'react';
import {
  BackHandler,
} from 'react-native';

import CustomComponents from 'react-native-deprecated-custom-components';

import Home from './pages/home';
import Editor from './pages/editor';

class ArtistNavgator extends Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    const {
      navigator,
    } = this.refs;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }
  }

  renderScene(route, navigator) {
    if (route.home) {
      return (
        <Home navigator={navigator} />
      );
    }
    if (route.editor) {
      return (
        <Editor navigator={navigator} imageUri={route.imageUri} />
      );
    }
    return (
      <Home navigator={navigator}/>
    );
  }


  render() {
    console.log(CustomComponents.Navigator);
    return (
      <CustomComponents.Navigator
        ref={'navigator'}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    );
  }
}

export default ArtistNavgator;
