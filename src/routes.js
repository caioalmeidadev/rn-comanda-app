import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Config from './pages/Config';
import Login from './pages/Login';
import TablesGrid from './pages/TablesGrid';
import ScanCode from './pages/New/ScanCode';
import SelectItem from './pages/New/SelectItem';
import Order from './pages/Order';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
          Config,
        }),
        App: createBottomTabNavigator(
          {
            TablesGrid,

            New: {
              screen: createStackNavigator(
                {
                  ScanCode,
                  SelectItem,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {marginLeft: 20},
                  },
                },
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Scanear',
                tabBarIcon: () => (
                  <Icon name="add-circle-outline" size={30} color="#836FFF" />
                ),
              },
            },
            Config,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              labelStyle: {
                fontSize: 16,
              },
              style: {
                backgroundColor: '#32CD32',
              },
            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
