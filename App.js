import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import Routes from './src/routes/stackRoutes'


export default function app () {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
} 