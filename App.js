import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Welcome Elijah</Text>
      </View>
      {/* body */}
      <View style={styles.body}>
        <Text>Greeen Ejay </Text>
        <Text>Greeen Ejay </Text>
        <Text>Greeen Ejay </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor:'gray',
    padding: '20px'
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'green'
  }
});
