
import { StyleSheet, Text, Pressable, View } from 'react-native';

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
