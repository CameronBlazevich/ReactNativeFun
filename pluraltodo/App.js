import React from 'react';
import {} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import MyHomeScreen from './components/homeScreen';
import SettingsScreen from './components/settingsScreen';
import VideosScreen from './components/videosScreen';
import DetailScreen from './components/detailScreen';
import VideoPlayer from './components/videoPlayer';

const StackNav = StackNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Details: {
      screen: DetailScreen,
    },
    VideoPlayer: {
      screen: VideoPlayer,
    },
  },
  {
    headerMode: 'none',
  },
);

const MyApp = TabNavigator(
  {
    Home: {
      screen: StackNav,
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

function App() {
  return <MyApp />;
}

export default App;
