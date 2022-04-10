import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationKeys} from '../../constants';
import {AllPatientsScreen} from '../../../screens/AllPatients';
import {ContactInfo} from '../../../screens/AllPatients/ContactInfo';
import {ChatScreen} from '../../../screens/ChatScreen/ChatScreen';

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
      <AllPatientsStack.Screen
        name={NavigationKeys.screen.chat}
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <AllPatientsStack.Screen
        name={NavigationKeys.screen.contactInfo}
        component={ContactInfo}
        options={{headerShown: false}}
      />
    </AllPatientsStack.Navigator>
  );
};
