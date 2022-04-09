import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../../constants';
import {TestingScreen} from '../../../screens/Testing';
import { Message } from '../../../components/molecules/Message';
import { ChatScreen } from '../../../screens/ChatScreen/ChatScreen';


const TestingStack = createNativeStackNavigator();

// logged in user flow
export const TestingStackStackNavigator = () => {
  return (
    <TestingStack.Navigator>
      <TestingStack.Screen name="ChatScreen" component={ChatScreen}/>
    </TestingStack.Navigator>
  );
};
