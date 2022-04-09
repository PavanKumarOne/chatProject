import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../../constants';
import {HomeScreen} from '../../../screens/homeScreen';

const HomeStack = createNativeStackNavigator();

// logged in user flow
export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={NavigationKeys.screen.homeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
