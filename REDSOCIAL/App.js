import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import Bouncer from './components/bouncer/Bouncer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
  <Provider store={store}>
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Bouncer"
        component={Bouncer}
        options={{title: 'Social React', headerStyle:{ backgroundColor: 'purple'}, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login', headerStyle:{ backgroundColor: 'purple'}, headerTitleAlign: 'center'}}
      />
       <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'Sing in', headerStyle:{ backgroundColor: 'purple'}, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home', headerStyle:{ backgroundColor: 'purple'}, headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
   </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
