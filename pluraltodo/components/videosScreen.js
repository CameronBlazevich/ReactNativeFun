import React from 'react';
import { Image, Button, StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { DOMParser } from 'xmldom';
import HeadingRow from './headingRow';
import VideoPreview from './videoPreview';
import * as playIcon from '../icons/play-icon.png';

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
      <Image source={playIcon.default} style={[styles.icon, { tintColor }]} />,
  };
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    console.log('getting initial state');
    return {
      playlistId: 'PLFZTVU_cpCnubbV-pY4f7wg13rEzXbAeO',
      videos: [],
    };
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
        this.parseVideos(responseText);
      })
      .catch((error) => {
        console.log('Error fetching the feed: ', error);
      });
  }

  parseVideos(responseText) {
    console.log(`Got feed with length: ${responseText.length}`);
    const doc = new DOMParser().parseFromString(responseText, 'text/xml');
    const objs = [];
    const videos = doc.getElementsByTagName('yt:videoId');
    const thumbs = doc.getElementsByTagName('media:thumbnail');
    const titles = doc.getElementsByTagName('media:title');
    // console.log(JSON.stringify(titles[0]));
    // console.log(titles);
    for (let i = 0; i < videos.length; i++) {
      objs.push({
        id: videos[i].textContent,
        thumbnailUrl: thumbs[i].getAttribute('url'),
        thumbnailWidth: thumbs[i].getAttribute('width'),
        thumbnailHeight: thumbs[i].getAttribute('height'),
        title: titles[i].textContent,
      });
    }
    this.setState({ videos: objs });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <HeadingRow text="Doug's Videos" />
          <ScrollView horizontal>
            {this.state.videos.map(video => <VideoPreview video={video} />)}
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

VideoScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  // playlistId: PropTypes.string.isRequired,
};
