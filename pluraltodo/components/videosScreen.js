import React from 'react';
import { Image, Button, StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { DOMParser } from 'xmldom';
import HeadingRow from './headingRow';
import VideoScrollView from './videoScrollView';
import * as playIcon from '../icons/play-icon.png';
import store from '../appStore';

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
    tabBarIcon: ({ tintColor }) =>
      <Image source={playIcon.default} style={[styles.icon, { tintColor }]} />,
  };

  static parseVideos(responseText) {
    const doc = new DOMParser().parseFromString(responseText, 'text/xml');
    const objs = [];
    const videos = doc.getElementsByTagName('yt:videoId');
    const thumbs = doc.getElementsByTagName('media:thumbnail');
    const titles = doc.getElementsByTagName('media:title');

    for (let i = 0; i < videos.length; i++) {
      objs.push({
        id: videos[i].textContent,
        thumbnailUrl: thumbs[i].getAttribute('url'),
        thumbnailWidth: thumbs[i].getAttribute('width'),
        thumbnailHeight: thumbs[i].getAttribute('height'),
        title: titles[i].textContent,
      });
    }
    // this.setState({ videos: objs });
    store.dispatch({
      type: 'ADD_VIDEOS',
      videos: objs,
    });
  }
  constructor(props) {
    super(props);

    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  componentDidMount() {
    this.fetchVideos();
  }
  // GET RID OF THESE PROMISES AND USE ASYNC AWAIT
  fetchVideos() {
    console.log('Fetching video feed...');
    const url = `${'https://www.youtube.com/feeds/videos.xml?playlist_id='}${this.state
      .playlistId}`;
    fetch(url)
      .then(response => response.text())
      .then((responseText) => {
        VideoScreen.parseVideos(responseText);
      })
      .catch((error) => {
        console.log('Error fetching the feed: ', error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <ScrollView>
            <HeadingRow text="Poker Thoughts" />
            <VideoScrollView videos={this.state.videos} navigation={this.props.navigation} />
            <HeadingRow text="Polker Hands" />
            <VideoScrollView videos={this.state.videos} navigation={this.props.navigation} />
            <HeadingRow text="Polker Hands" />
            <VideoScrollView videos={this.state.videos} navigation={this.props.navigation} />
          </ScrollView>
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('VideoPlayer')}
          title="Go to notifications"
        />
      </View>
    );
  }
}

export default VideoScreen;

VideoScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  // playlistId: PropTypes.string.isRequired,
};
