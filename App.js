import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MessagesContext, UserContext } from './components/Contexts';
import { Icon, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import UserView from './components/UserView';
import AddMessageView from './components/AddMessageView';
import MessagesView from './components/MessagesView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style from './styles/Style';

export default function App() {

  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(messages);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <MessagesContext.Provider value={{ messages, setMessages }}>
        <PaperProvider theme={MD3LightTheme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </MessagesContext.Provider>
    </UserContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom' style={Style.container} screenOptions={{tabBarActiveTintColor: 'brown', tabBarInactiveTintColor: 'orange'}}>
        <Tab.Screen
          name='user'
          options={{ title: 'User', tabBarIcon: ({color}) => <Icon color={color} source='account-circle' size={24} /> }}
          component={UserView}
        />
        <Tab.Screen
          name='addmessage'
          options={{ title: 'Add message', tabBarIcon: ({color}) => <Icon color={color} source='message-processing' size={24} /> }}
          component={AddMessageView}
        />
        <Tab.Screen
          name='messages'
          options={{ title: 'Messages', tabBarIcon: ({color}) => <Icon color={color} source='clipboard-list' size={24} /> }}
          component={MessagesView} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}