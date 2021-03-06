import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigator} from './bottomTabNavigator';
import {NavigationKeys} from '../constants';
import {CommonStackNavigator} from './commonNavigator';

const AppStack = createNativeStackNavigator();

// logged in user flow
export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={NavigationKeys.tab.bottomTab}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name={NavigationKeys.stacks.common}
        component={CommonStackNavigator}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};
