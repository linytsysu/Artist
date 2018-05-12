import React, { Component } from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { getImage } from './constant';

class StyleImageBtn extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    pressHandler: PropTypes.func.isRequired,
    used: PropTypes.bool,
    checked: PropTypes.bool,
  }

  static defaultProps = {
    checked: false,
    used: false,
  }

  shouldComponentUpdate(nextProps) {
    return !(nextProps.checked === this.props.checked);
  }

  render() {
    const {
      name,
      pressHandler,
      checked,
      used,
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={pressHandler}>
        <ImageBackground
          source={getImage(name)}
          style={styles.image}>
          {
            checked
              ? (
                <View style={styles.status}>
                  <MaterialIcon
                    name={'check'}
                    style={styles.statusIcon}
                  />
                </View>
              ) :
              used
                ? (
                  <View style={styles.used}>
                    <View style={styles.iconWrapper}>
                      <MaterialIcon
                        name={'check'}
                        style={styles.usedIcon}
                      />
                    </View>
                  </View>
                ) : <View />
          }
          <View style={styles.intro}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 110,
    height: 100,
    justifyContent: 'space-between',
  },
  status: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  statusIcon: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  used: {
    alignItems: 'flex-end',
    paddingTop: 4,
    paddingRight: 4,
  },
  iconWrapper: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#83e876',
  },
  usedIcon: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  intro: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(256, 256, 256, 0.8)',
  },
  name: {
    color: '#000000',
  },
});

export default StyleImageBtn;
