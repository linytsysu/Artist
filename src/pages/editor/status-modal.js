import React from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

StatusModal.propTypes = {
  visible: React.PropTypes.bool,
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
