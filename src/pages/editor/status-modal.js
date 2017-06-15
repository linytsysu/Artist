import React from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

StatusModal.propTypes = {
  visible: PropTypes.bool,
};

function StatusModal({visible = false}) {
  return (
    <TouchableWithoutFeedback>
      <Modal
        onRequestClose={() => {}}
        visible={visible}
        transparent={true}>
        <View style={styles.container}>
          <ActivityIndicator
            color='#FFFFFF'
          />
        </View>
      </Modal>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StatusModal;
