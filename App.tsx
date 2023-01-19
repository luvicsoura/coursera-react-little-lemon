import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { LoginScreen } from './components/LoginScreen';
import { WelcomeView } from './components/WelcomeView';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <View style={[styles.container, colorScheme === 'light' ? styles.containerLightTheme : styles.containerDarkTheme]}>
        <View style={{flex: 1}}>
          <LittleLemonHeader/>
          <Routes/>
        </View>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const { Navigator, Screen } = createDrawerNavigator();

const Routes = () => (
  <Navigator
    initialRouteName='Login'
    screenOptions={{
      drawerPosition: 'left',
    }}
  >
    <Screen
      name="Login"
      component={LoginScreen}
    />
    <Screen
      name="Welcome"
      component={WelcomeView}
    />
  </Navigator>
);

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
