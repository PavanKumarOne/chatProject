import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../../constants';
import {TestingScreen} from '../../../screens/Testing';
import {Message} from '../../../components/molecules/ChatRow';
import {ChatScreen} from '../../../screens/ChatScreen/ChatScreen';

const TestingStack = createNativeStackNavigator();

// logged in user flow
export const TestingStackStackNavigator = () => {
  return (
    <TestingStack.Navigator>
      <TestingStack.Screen
        name={NavigationKeys.screen.chat}
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </TestingStack.Navigator>
  );
};
