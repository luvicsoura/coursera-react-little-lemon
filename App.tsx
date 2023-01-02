import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { LittleLemonFooter } from './components/LittleLemonFooter';
import { WelcomeView } from './components/WelcomeView';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <LittleLemonHeader/>
        <WelcomeView/>
      </View>
      <LittleLemonFooter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
