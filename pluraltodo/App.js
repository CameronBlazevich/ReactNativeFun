import React from 'react';
import {} from 'react-native';
import { TabNavigator } from 'react-navigation';
import MyHomeScreen from './components/homeScreen';
import SettingsScreen from './components/settingsScreen';
import VideosScreen from './components/videosScreen';

const MyApp = TabNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Videos: {
      screen: VideosScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#cc5500',
      inactiveTintColor: '#ffffff',
      indicatorStyle: {
        backgroundColor: '#cc5500',
      },
      style: {
        paddingTop: 40,
      },
      showIcon: true,
      showLabel: true,
    },
  },
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ errors: [] });
  }
  render() {
    return <MyApp />;
  }
}
