import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const iconNameMap = {
  camera: 'camera-alt',
  photo: 'photo-library',
};

HomeBtn.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.oneOf(Object.keys(iconNameMap)),
  pressHandler: PropTypes.func.isRequired,
};

function HomeBtn ({name, text, pressHandler}) {
  const iconName = iconNameMap[name];
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btn}
      onPress={pressHandler}>
      <MaterialIcon
        style={styles.icon}
        name={iconName}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 150,
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#4E98D0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
    color: '#FFFFFF',
  },
  text: {
    color: '#FFFFFF',
  },
});

export default HomeBtn;
