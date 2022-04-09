import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../../constants';
import {AllPatientsScreen} from '../../../screens/AllPatients';

const AllPatientsStack = createNativeStackNavigator();

// logged in user flow
export const AllPatientsStackNavigator = () => {
  return (
    <AllPatientsStack.Navigator>
      <AllPatientsStack.Screen
        name={NavigationKeys.screen.allPatient}
        component={AllPatientsScreen}
        options={{headerShown: false}}
      />
    </AllPatientsStack.Navigator>
  );
};