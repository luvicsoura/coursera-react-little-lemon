import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { WelcomeView } from './components/WelcomeView';
import { LoginScreen } from './components/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

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

const { Navigator, Screen } = createBottomTabNavigator();

const Routes = () => (
  <Navigator
    initialRouteName='Login'
    screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }}
  >
    <Screen
      name="Login"
      options={{
        headerShown: false,
        tabBarIcon: LoginScreenIcon
      }}
      component={LoginScreen}
    />
    <Screen
      name="Welcome"
      options={{
        tabBarIcon: WelcomeScreenIcon
      }}
      component={WelcomeView}
    />
  </Navigator>
);

type TabBarIconProps = { focused: boolean, size: number, color: string};

const LoginScreenIcon = ({ focused, size, color }: TabBarIconProps) => {
  const iconName = focused ? 'log-in' : 'log-in-outline';
  return <Ionicons name={iconName} size={size} color={color} />;
};

const WelcomeScreenIcon =  ({ focused, size, color }: TabBarIconProps) => {
  const iconName = focused ? 'information-circle' : 'information-circle-outline';
  return <Ionicons name={iconName} size={size} color={color} />;
};

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
