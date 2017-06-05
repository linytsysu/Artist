import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  CameraRoll,
  ToastAndroid,
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import TensorFlowModule from '../../tensorflow/TensorFlow';

import Backbtn from './back-btn';
import StatusModal from './status-modal';
import OperationContainer from './operation-container';
import StyleContainer from './style-container';

const BEFORE_PROCESS = 0;
const PROCESSING = 1;
const PROCESS_SUCCESS = 2;
const PROCESS_ERROR = 3;

const ROOT_PATH = RNFS.DocumentDirectoryPath;

class Editor extends Component {
  static propTypes = {
    imageUri: React.PropTypes.string.isRequired,
    navigator: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      currentStyle: null,
      processStyle: null,
      stylized: {},
      status: BEFORE_PROCESS,
    };
    this._backToHome = this._backToHome.bind(this);
    this.requestArtist = this.requestArtist.bind(this);
    this._resetImage = this._resetImage.bind(this);
    this._saveToCameraRoll = this._saveToCameraRoll.bind(this);
    this._shareImage = this._shareImage.bind(this);
    this._getImageSourceUri = this._getImageSourceUri.bind(this);
  }

  _backToHome() {
    this.props.navigator.pop();
  }

  requestArtist(styleName) {
    const resourceUri = this.props.imageUri;
    const styleIndex = parseInt(styleName.slice(5));
    // alert(resourceUri);
    TensorFlowModule.stylize(resourceUri, styleIndex).then((data) => {
      alert(data);
    });
    // if (this.state.stylized[styleName]) {
    //   this.setState({
    //     currentStyle: styleName,
    //   });
    //   return;
    // }
    // const resourceUri = this.props.imageUri;
    // const suffix = (new Date()).getTime();
    // this.setState({
    //   status: PROCESSING,
    //   processStyle: styleName,
    // });
    // RNFetchBlob.fetch('POST', 'http://120.25.219.17/upload',
      //   {
      //     'Content-Type' : 'multipart/form-data',
      //   },
      //   [{
      //     name: 'style',
      //     data: styleName,
      //   },{
      //     name: 'filename',
      //     filename: 'resource.png',
      //     data: RNFetchBlob.wrap(resourceUri),
      //   },]
      // )
      // .then((response) => {
      //   let savePath = `${ROOT_PATH}/${styleName}-${suffix}.png`;
      //   return RNFS.writeFile(savePath, response.data, 'base64');
      // })
      // .then(() => {
      //   this.setState({
      //     status: PROCESS_SUCCESS,
      //     currentStyle: styleName,
      //     processStyle: null,
      //     stylized: { ...this.state.stylized, [styleName]: `${ROOT_PATH}/${styleName}-${suffix}.png` },
      //   });
      // })
      // .catch(() => {
      //   this.setState({
      //     status: PROCESS_ERROR,
      //     processStyle: null,
      //   });
      // });
  }

  _resetImage() {
    this.setState({
      status: BEFORE_PROCESS,
      currentStyle: null,
      processStyle: null,
    });
  }

  _saveToCameraRoll() {
    const {
      currentStyle,
      stylized,
    } = this.state;
    const sourceUri = 'file://' + stylized[currentStyle];
    CameraRoll.saveToCameraRoll(sourceUri, 'photo')
      .then(() => {
        ToastAndroid.show('保存成功', ToastAndroid.SHORT);
      })
      .catch(() => {
        ToastAndroid.show('保存失败');
      });
  }

  _shareImage() {
    const {
      currentStyle,
      stylized,
    } = this.state;
    const sourceUri = 'file://' + stylized[currentStyle];
    RNFS.readFile(sourceUri, 'base64')
      .then((data) => {
        return Share.open({
          title: 'Artist',
          message: 'Artist photo',
          url: 'data:image/png;base64,' + data,
          subject: 'Share Link',
        });
      })
      .catch(() => {
        ToastAndroid.show('分享失败', ToastAndroid.SHORT);
      });
  }

  _getImageSourceUri() {
    const {
      currentStyle,
      processStyle,
      stylized,
    } = this.state;
    if (!currentStyle || !stylized[currentStyle]) {
      return this.props.imageUri;
    } else {
      return `file://${stylized[currentStyle]}`;
    }
  }

  render() {
    const resourceUri = this.props.imageUri;
    const {
      currentStyle,
      processStyle,
      stylized,
      status,
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={'rgba(0, 0, 0, 0.4)'}
        />
        <StatusModal visible={status === PROCESSING} />
        <Image
          source={{uri: this._getImageSourceUri()}}
          style={styles.image}>
          <View style={styles.inner}>
            <View style={styles.navigatorBar}>
              <Backbtn pressHandler={this._backToHome} />
            </View>
            <View>
              <OperationContainer
                visible={currentStyle !== null}
                saveHandler={this._saveToCameraRoll}
                shareHandler={this._shareImage}
                clearHandler={this._resetImage}
              />
              <StyleContainer
                current={processStyle
                          ? processStyle
                          : currentStyle
                          ? currentStyle
                          : ''}
                stylized={Object.keys(stylized)}
                styleSelectHandler={this.requestArtist}
              />
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
  inner: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  navigatorBar: {
    height: 50,
    paddingLeft: 10,
    justifyContent: 'center',
  },
});

export default Editor;
