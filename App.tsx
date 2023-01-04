import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { LoginScreen } from './components/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <LittleLemonHeader/>
        <LoginScreen/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
