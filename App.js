import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/Home';
import AuthScreen from './pages/Auth';
import HeaderMenu from './components/headerMenu';
import HeaderFilter from './components/headerFilter';
import HeaderMessage from './components/headerMessage';

const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen" navigationOptions screenOptions={({ navigation }) => ({
        headerLeft: () => <HeaderMenu navigation={navigation} />,
      })}>
        <Stack.Screen 
          name="AuthScreen" 
          component={AuthScreen}
          options={{headerShown: false}} 
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerRight: ({ navigation }) => (<>
              <HeaderFilter navigation={navigation} />
              <HeaderMessage navigation={navigation} />
            </>),
            title: 'Список задач'
          }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
