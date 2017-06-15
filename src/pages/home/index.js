import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';

import HomeBtn from './home-btn';

class Home extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this._goToEditor = this._goToEditor.bind(this);
    this._launchCamera = this._launchCamera.bind(this);
    this._launchImageLibrary = this._launchImageLibrary.bind(this);
  }

  _goToEditor(uri) {
    this.props.navigator.push({
      editor: true,
      imageUri: uri,
    });
  }

  _launchCamera() {
    const option = {
      title: '拍摄一张照片',
      maxWidth: 1024,
      maxHeight: 1024,
      noData: true,
    };
    ImagePicker.launchCamera(option, (response) => {
      if (response.didCancel) {
        return;
      }
      if (response.error) {
        return;
      }
      this._goToEditor(response.uri);
    });
  }

  _launchImageLibrary() {
    const option = {
      title: '选取一张照片',
      maxWidth: 1024,
      maxHeight: 1024,
      noData: true,
    };
    ImagePicker.launchImageLibrary(option, (response) => {
      if (response.didCancel) {
        return;
      }
      if (response.error) {
        return;
      }
      this._goToEditor(response.uri);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={'rgba(0, 0, 0, 0)'}
        />
        <HomeBtn
          name={'camera'}
          text={'拍一张照片'}
          pressHandler={this._launchCamera}
        />
        <HomeBtn
          name={'photo'}
          text={'使用图库图片'}
          pressHandler={this._launchImageLibrary}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4BCDE7',
  },
});

export default Home;
