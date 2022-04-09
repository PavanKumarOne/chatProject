import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationKeys} from '../../constants';
import {HomeStackNavigator} from './HomeStackNavigator';
import {Colors, ResponsiveSize, ImagePath} from '../../../utility';
import VectorImage from 'react-native-vector-image';

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.buttonBackground,
        tabBarInactiveTintColor: Colors.lightGrey,
        // adaptive: false,
        lazy: false,
        tabBarLabelStyle: {
          fontSize: ResponsiveSize(10),
          fontWeight: '600',
        },
      }}
      initialRouteName={NavigationKeys.stacks.homeStack}>
      <BottomTab.Screen
        name={NavigationKeys.stacks.homeStack}
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return (
              <VectorImage source={ImagePath.home} style={{tintColor: color}} />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
