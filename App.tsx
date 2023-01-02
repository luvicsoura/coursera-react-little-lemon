import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { LittleLemonFooter } from './components/LittleLemonFooter';
import { WelcomeView } from './components/WelcomeView';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <LittleLemonHeader/>
        <WelcomeView/>
      </ScrollView>
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
