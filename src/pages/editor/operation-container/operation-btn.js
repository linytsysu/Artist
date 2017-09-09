import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const iconNameMap = {
  download: 'cloud-download',
  share: 'share',
  clear: 'clear',
};

OperationBtn.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconNameMap)).isRequired,
  pressHandler: PropTypes.func.isRequired,
};

function OperationBtn({name, pressHandler}) {
  const iconName = iconNameMap[name];
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.btn,
        name === 'download'
          ? styles.downloadBtn
          : name === 'share'
            ? styles.shareBtn
            : styles.clearBtn
      ]}
      onPress={pressHandler}>
      <MaterialIcon
        style={styles.icon}
        name={iconName}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadBtn: {
    backgroundColor: '#2e9cfa',
  },
  shareBtn: {
    backgroundColor: '#fc7f53',
  },
  clearBtn: {
    backgroundColor: '#e84a41',
  },
  icon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default OperationBtn;
