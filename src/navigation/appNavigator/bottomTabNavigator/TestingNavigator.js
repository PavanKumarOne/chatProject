import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../../constants';
import {TestingScreen} from '../../../screens/Testing';

const TestingStack = createNativeStackNavigator();

// logged in user flow
export const TestingStackStackNavigator = () => {
  return (
    <TestingStack.Navigator>
      <TestingStack.Screen
        name={NavigationKeys.screen.allPatient}
        component={TestingScreen}
        options={{headerShown: false}}
      />
    </TestingStack.Navigator>
  );
};
