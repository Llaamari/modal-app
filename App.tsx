
import { StyleSheet, Text, Pressable, View, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text>Show modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
