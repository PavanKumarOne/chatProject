import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../constants';
import {ProfileScreen} from '../../screens/Profile';
import { ChatScreen } from '../../screens/ChatScreen/ChatScreen';

const CommonStack = createNativeStackNavigator();

// logged in user flow
export const CommonStackNavigator = () => {
  return (
    <CommonStack.Navigator>
      <CommonStack.Screen
        name={NavigationKeys.screen.profile}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <CommonStack.Screen
        name={NavigationKeys.screen.profile}
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </CommonStack.Navigator>
  );
};
