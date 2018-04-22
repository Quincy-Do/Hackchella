import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import login from '../screens/mainscreen'
import restaurants from '../screens/restaurants'
import organizations from '../screens/organizations'



export const Root = StackNavigator({
  Login: {
    screen: login
  },
  Restaurants: {
    screen: restaurants,
  },
  Organizations: {
    screen: organizations,
  },
}, {
  initialRouteName: 'Login',
  mode: 'modal',
  headerMode: 'none',
});
