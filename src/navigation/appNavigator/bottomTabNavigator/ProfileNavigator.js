import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../../constants';
import {ProfileScreen} from '../../../screens/Profile';

const ProfileStack = createNativeStackNavigator();

// logged in user flow
export const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={NavigationKeys.screen.profile}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};
