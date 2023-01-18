import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { WelcomeView } from './components/WelcomeView';
import { LoginScreen } from './components/LoginScreen';

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

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => (
  <Navigator
    initialRouteName='Login'
  >
    <Screen
      name="Login"
      options={{
        headerShown: false,
      }}
      component={LoginScreen}
    />
    <Screen name="Welcome" component={WelcomeView}/>
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
