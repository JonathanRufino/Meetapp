import React from 'react';
import { Image } from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import logo from './assets/images/logo/logo.png';
import i18n from './i18n';

import Onboard from './pages/Onboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Meetups from './pages/Meetups';
import Subscriptions from './pages/Subscriptions';
import Profile from './pages/Profile';

/**
 * NOTE: The configuration below was necessary due to the navigation chaining.
 * It fixes the tabs title and enable configuring header options
 *
 * See: https://reactnavigation.org/docs/en/navigation-options-resolution.html
 */

const stackNavigationOptions = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerTitle: (
      <Image source={logo} resizeMode="contain" style={{ height: 24 }} />
    ),
    headerStyle: {
      backgroundColor: '#000',
    },
  },
};

const MeetupsStack = createStackNavigator(
  { Meetups },
  {
    navigationOptions: {
      tabBarLabel: i18n.t('tab.meetups'),
      tabBarIcon: ({ tintColor }) => (
        <MIcon name="format-list-bulleted" size={20} color={tintColor} />
      ),
    },
    ...stackNavigationOptions,
  }
);

const SubscriptionsStack = createStackNavigator(
  { Subscriptions },
  {
    navigationOptions: {
      tabBarLabel: i18n.t('tab.subscriptions'),
      tabBarIcon: ({ tintColor }) => (
        <MIcon name="local-offer" size={20} color={tintColor} />
      ),
    },
    ...stackNavigationOptions,
  }
);

const ProfileStack = createStackNavigator(
  { Profile },
  {
    navigationOptions: {
      tabBarLabel: i18n.t('tab.profile'),
      tabBarIcon: ({ tintColor }) => (
        <MIcon name="person" size={20} color={tintColor} />
      ),
    },
    ...stackNavigationOptions,
  }
);

const createRouter = (isSigned = false, firstOpen = true) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator(
          {
            Onboard,
            SignIn,
            SignUp,
          },
          {
            initialRouteName: firstOpen ? 'Onboard' : 'SignIn',
          }
        ),
        App: createBottomTabNavigator(
          {
            MeetupsStack,
            SubscriptionsStack,
            ProfileStack,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#2b1a2f',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );

export default createRouter;
