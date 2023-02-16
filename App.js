import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/Home';
import AuthScreen from './pages/Auth';
import HeaderMenu from './components/headerMenu';
import HeaderFilter from './components/headerFilter';
import HeaderMessage from './components/headerMessage';

import * as TaskManager from 'expo-task-manager';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Text } from 'react-native';


const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const BACKGROUND_NOTIFICATION_TASK = 'BACKGROUND-NOTIFICATION-TASK';

TaskManager.defineTask(BACKGROUND_NOTIFICATION_TASK, ({ data, error, executionInfo }) => {
  console.log('Received a notification in the background!');
});
Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK);

const App = () => {
  const [expoPushToken, setExpoPushToken] = React.useState('');
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();
  
  React.useEffect(async ()=>{
      try {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
      } catch (error) {
          console.log(error)
      }
  },[])

  // await schedulePushNotification(); вызвать уведомление 
  return (
    <>
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
      <Text >Токен {expoPushToken}</Text>
    </>
  );
};




async function schedulePushNotification(title="You've got mail! 📬",body='Here is the notification body', notData='goes here') {
  await Notifications.scheduleNotificationAsync({
    content: {
      title:title,
      body: body,
      data: { data: notData },
      sound: true
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    
		try {
			token = await Notifications.getExpoPushTokenAsync();
		}catch(err){
			alert(`failed to get token error ${err}`);
		}
    token = token.data
    fetch('https://8544.vps.asko.run/push/register_push.php',{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token:token
      })
    })
    .then(response => response.json())
    .then(commits => {
      console.log(commits)
    });
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
export default App
