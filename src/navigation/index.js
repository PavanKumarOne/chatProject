import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from './appNavigator';
import {AuthStackNavigator} from './guestNavigator/AuthStackNavigator';
import {useSelector} from 'react-redux';

export default function RootNavigator() {
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
