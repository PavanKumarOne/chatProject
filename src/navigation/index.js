import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from './appNavigator';
import {AuthStackNavigator} from './guestNavigator/AuthStackNavigator';

export default function RootNavigator() {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
