import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme, Text } from 'react-native';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { WelcomeView } from './components/WelcomeView';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, colorScheme === 'light' ? styles.containerLightTheme : styles.containerDarkTheme]}>
      <View style={{flex: 1}}>
        <LittleLemonHeader/>
        <WelcomeView/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDarkTheme: {
    backgroundColor: '#333333',
  },
  containerLightTheme: {
    backgroundColor: 'white',
  }
});
