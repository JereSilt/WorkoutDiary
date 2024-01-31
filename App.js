import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MessagesContext, UserContext } from './components/Contexts';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
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

  return (
    <UserContext.Provider value={{username, setUsername}}>
      <MessagesContext.Provider value={{messages, setMessages}}>
        <PaperProvider theme={MD3LightTheme}>
          <SafeAreaProvider>
            <Navigation/>
          </SafeAreaProvider>
        </PaperProvider>
      </MessagesContext.Provider>
    </UserContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navigation(){
  return(
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom' style={Style.container}>
        <Tab.Screen name='user' options={{title: 'User'}} component={UserView} />
        <Tab.Screen name='addmessage' options={{title: 'Add message'}} component={AddMessageView}/>
        <Tab.Screen name='messages' options={{title: 'Messages'}} component={MessagesView}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}