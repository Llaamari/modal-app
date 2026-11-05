
import { useState } from 'react';
import { StyleSheet, Text, Pressable, View, Modal } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Opening a modal window */}
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show modal message</Text>
      </Pressable>

      {/* Modal window visibility */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is modal...</Text>

            {/* Closing a modal window */}
            <Pressable onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 30,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    gap: 30,
  },
});
