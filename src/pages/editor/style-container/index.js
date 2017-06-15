import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import StyleImageBtn from './image-btn';
import { styleNames } from './constant';


class StyleContainer extends Component {
  static propTypes = {
    current: PropTypes.string.isRequired,
    stylized: PropTypes.array.isRequired,
    styleSelectHandler: PropTypes.func.isRequired,
  }

  render() {
    const {
      current,
      stylized,
      styleSelectHandler,
    } = this.props;
    return (
      <ScrollView
        style={styles.container}
        horizontal={true}>
        {
          styleNames.map((name, index) => (
            <StyleImageBtn
              key={index}
              name={name}
              used={stylized.includes(name)}
              checked={styleNames.indexOf(current) === index}
              pressHandler={() => {
                styleSelectHandler(styleNames[index]);
              }}
            />
          ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
});

export default StyleContainer;
