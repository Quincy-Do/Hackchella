import React from 'react';
import { TabNavigator, StackNavigator, HeaderBackButton } from 'react-navigation';
import { Icon } from 'react-native-elements';

import login from '../screens/mainscreen'
import restaurants from '../screens/restaurants'
import organizations from '../screens/organizations'


const backButton = ({ navigation }) => ({
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
})

export const restaurantsNavigation = StackNavigator({
  restaurantsNav: {
    screen: restaurants,
    navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
           title: 'Welcome',
           headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
         })
  },
})
export const organizationsNavigation = StackNavigator({
  organizationsNav: {
    screen: restaurants,
    navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
         title: 'Welcome',
         headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
       })
  },
})

export const Root = StackNavigator({
  Login: {
    screen: login,
    navigationOptions: {
      header: null,
    },
  },
  Restaurants:{
    screen: restaurantsNavigation,
  },
  Organizations:{
    screen: organizationsNavigation,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
