import React from 'react';
import { Image, Button, StyleSheet, View, ScrollView } from 'react-native';
import HeadingRow from './headingRow';
import VideoPreview from './videoPreview';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  container: {
    flex: 1,
  },
});

class VideoScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Videos',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) =>
      <Image source={require('../icons/play-icon.png')} style={[styles.icon, { tintColor }]} />,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <HeadingRow text="Doug's Videos" />
          <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
          </ScrollView>
          <HeadingRow text="Joey's Videos" />
          <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
          </ScrollView>
          <HeadingRow text="Ryan's Videos" />
          <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
          </ScrollView>
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
}

export default VideoScreen;
