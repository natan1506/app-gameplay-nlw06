import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../pages/SignIn';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes: React.FC = () => {

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
      name="SignIn"
      component={SignIn}
    />
    </Navigator>
  )
}