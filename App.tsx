import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { AppLoading } from 'expo'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './pages/SignIn'
import Main from './pages/Main'

const Stack = createStackNavigator()

const linking = {
  prefixes: [],
  config: {
    screens: {
      SignIn: '/',
      Main: '/main',
    },
  },
}

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name='SignIn'
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Main'
          component={Main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
