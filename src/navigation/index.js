import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from './appNavigator';
import {AuthStackNavigator} from './guestNavigator/AuthStackNavigator';

export default function RootNavigator() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
