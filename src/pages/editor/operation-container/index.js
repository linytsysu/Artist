import React, { Component } from 'React';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import OperationBtn from './operation-btn';

class OperationContainer extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    saveHandler: PropTypes.func.isRequired,
    shareHandler: PropTypes.func.isRequired,
    clearHandler: PropTypes.func.isRequired,
  }

  render() {
    const {
      visible,
      saveHandler,
      shareHandler,
      clearHandler,
    } = this.props;
    if (!visible) {
      return null;
    }
    return (
      <View style={styles.container}>
        <View style={styles.btns}>
          <OperationBtn
            name='clear'
            pressHandler={clearHandler}
          />
          <OperationBtn
            name='share'
            pressHandler={shareHandler}
          />
          <OperationBtn
            name='download'
            pressHandler={saveHandler}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  btns: {
    width: 160,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default OperationContainer;
