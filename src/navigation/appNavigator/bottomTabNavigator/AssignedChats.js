import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../../constants';
import {AssignedChatsScreen} from '../../../screens/AssignedChats';

const AssignedChatsStack = createNativeStackNavigator();

// logged in user flow
export const AssignedChatsStackNavigator = () => {
  return (
    <AssignedChatsStack.Navigator>
      <AssignedChatsStack.Screen
        name={NavigationKeys.screen.assignedChats}
        component={AssignedChatsScreen}
        options={{headerShown: false}}
      />
    </AssignedChatsStack.Navigator>
  );
};
