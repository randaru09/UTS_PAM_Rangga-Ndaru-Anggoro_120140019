import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import Index from './screen/Index';
import Music1 from './screen/Music1';
import Music2 from './screen/Music2';
import Music3 from './screen/Music3';
import Music4 from './screen/Music4';
import Profile from './screen/Profile';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }}/>
        <Stack.Screen name="Music1" component={Music1} options={{ headerShown: false }}/>
        <Stack.Screen name="Music2" component={Music2} options={{ headerShown: false }}/>
        <Stack.Screen name="Music3" component={Music3} options={{ headerShown: false }}/>
        <Stack.Screen name="Music4" component={Music4} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}