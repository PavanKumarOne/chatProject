import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../constants';
import {ProfileScreen} from '../../screens/Profile';
import {ChatScreen} from '../../screens/ChatScreen/ChatScreen';

const CommonStack = createNativeStackNavigator();

// logged in user flow
export const CommonStackNavigator = () => {
  return (
    <CommonStack.Navigator>
      {/* <CommonStack.Screen
        name={NavigationKeys.screen.chat}
        component={ChatScreen}
        options={{headerShown: false}}
      /> */}
    </CommonStack.Navigator>
  );
};
