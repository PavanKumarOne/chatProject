import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationKeys} from '../../constants';
import {AllPatientsStackNavigator} from './AllPatientsNavigator';
import {AssignedChatsStackNavigator} from './AssignedChats';
import {ProfileStackNavigator} from './ProfileNavigator';
import {TestingStackStackNavigator} from './TestingNavigator';
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
        adaptive: false,
        lazy: false,
        tabBarLabelStyle: {
          fontSize: ResponsiveSize(10),
          fontWeight: '600',
        },
      }}
      initialRouteName={NavigationKeys.stacks.allPatients}>
      <BottomTab.Screen
        name={NavigationKeys.stacks.assignedChats}
        component={AssignedChatsStackNavigator}
        options={{
          tabBarLabel: 'Assigned Chats',
          tabBarIcon: ({color, size}) => {
            return (
              <VectorImage source={ImagePath.home} style={{tintColor: color}} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationKeys.stacks.allPatients}
        component={AllPatientsStackNavigator}
        options={{
          tabBarLabel: 'All Patients',
          tabBarIcon: ({color, size}) => {
            return (
              <VectorImage source={ImagePath.home} style={{tintColor: color}} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationKeys.stacks.profile}
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => {
            return (
              <VectorImage source={ImagePath.home} style={{tintColor: color}} />
            );
          },
        }}
      />
      <BottomTab.Screen // TODO remove this.
        name={NavigationKeys.stacks.testing}
        component={TestingStackStackNavigator}
        options={{
          tabBarLabel: 'Testing',
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
