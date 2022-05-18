import React from 'react';
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParams = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: { id: number, nombre: string },
}
const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen" hoja de inicio
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Pagina1Screen" options={{ title: 'Pagina1' }} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{ title: 'Pagina2' }} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{ title: 'Pagina3' }} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" options={{ title: 'PersonaScreen' }} component={PersonaScreen} />

    </Stack.Navigator >
  );
};

export default StackNavigator;
