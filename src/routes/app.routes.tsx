import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { AppointmentDetails } from '../pages/AppointmentDetails';
import { AppointmentCreate } from '../pages/AppointmentCreate';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes: React.FC = () => {

  return (
    <Navigator
      headerMode="none"
      screenOptions={{ 
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
       }}
    >
    <Screen 
      name="Home"
      component={Home}
    />
    <Screen 
      name="AppointmentDetails"
      component={AppointmentDetails}
    />
    <Screen 
      name="AppointmentCreate"
      component={AppointmentCreate}
    />
    </Navigator>
  )
}