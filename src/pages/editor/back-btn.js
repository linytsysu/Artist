import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

BackBtn.propTypes = {
  pressHandler: PropTypes.func.isRequired,
};

function BackBtn({pressHandler}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={pressHandler}>
      <MaterialIcon
        name='arrow-back'
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default BackBtn;
