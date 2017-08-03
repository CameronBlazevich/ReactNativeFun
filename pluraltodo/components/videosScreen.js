import React from 'react';
import { Image, Button, StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { DOMParser } from 'xmldom';
import HeadingRow from './headingRow';
import VideoScrollView from './videoScrollView';
import * as playIcon from '../icons/play-icon.png';
import store from '../appStore';
import BackgroundImage from './backgroundImage';

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

  static parseVideos(responseText, playlistId) {
    const doc = new DOMParser().parseFromString(responseText, 'text/xml');
    const objs = [];
    const videos = doc.getElementsByTagName('yt:videoId');
    const thumbs = doc.getElementsByTagName('media:thumbnail');
    const titles = doc.getElementsByTagName('media:title');

    for (let i = 0; i < videos.length; i += 1) {
      objs.push({
        id: videos[i].textContent,
        thumbnailUrl: thumbs[i].getAttribute('url'),
        thumbnailWidth: thumbs[i].getAttribute('width'),
        thumbnailHeight: thumbs[i].getAttribute('height'),
        title: titles[i].textContent,
      });
    }
    if (playlistId === 'PLFZTVU_cpCnubbV-pY4f7wg13rEzXbAeO') {
      store.dispatch({
        type: 'ADD_POKER_THOUGHTS_VIDEOS',
        videos: objs,
      });
    }

    if (playlistId === 'PLFZTVU_cpCnsE_KqKYjAE132HywfN1vrt') {
      store.dispatch({
        type: 'ADD_POLKER_HANDS_VIDEOS',
        videos: objs,
      });
    }

    if (playlistId === 'PLFZTVU_cpCnubbV-pY4f7wg13rEzXbAeO') {
      store.dispatch({
        type: 'ADD_POKER_THOUGHTS_VIDEOS',
        videos: objs,
      });
    }

    if (playlistId === 'PLFZTVU_cpCnvrAMVyoALKyfVVimTR9l4Z') {
      store.dispatch({
        type: 'ADD_VLOG_VIDEOS',
        videos: objs,
      });
    }
  }
  constructor(props) {
    super(props);

    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  componentDidMount() {
    this.fetchVideos(this.state.pokerThoughtsPlaylistId);
    this.fetchVideos(this.state.polkerHandsPlaylistId);
    this.fetchVideos(this.state.vlogPlaylistId);
  }
  // GET RID OF THESE PROMISES AND USE ASYNC AWAIT
  fetchVideos(playlistId) {
    const url = `${'https://www.youtube.com/feeds/videos.xml?playlist_id='}${playlistId}`;
    fetch(url)
      .then(response => response.text())
      .then((responseText) => {
        VideoScreen.parseVideos(responseText, playlistId);
      })
      .catch((error) => {
        console.log('Error fetching the feed: ', error);
      });
  }

  render() {
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <View style={styles.body}>
            <ScrollView>
              <HeadingRow text="Poker Thoughts" color="white" />
              <VideoScrollView
                videos={this.state.pokerThoughtsVideos}
                navigation={this.props.navigation}
              />
              <HeadingRow text="Polker Hands" color="white" />
              <VideoScrollView
                videos={this.state.polkerHandsVideos}
                navigation={this.props.navigation}
              />
              <HeadingRow text="Vlogs" color="white" />
              <VideoScrollView videos={this.state.vlogVideos} navigation={this.props.navigation} />
            </ScrollView>
          </View>
          <Button
            onPress={() => this.props.navigation.navigate('HomeScreen')}
            title="Go back home"
          />
        </View>
      </BackgroundImage>
    );
  }
}

export default VideoScreen;

VideoScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  // playlistId: PropTypes.string.isRequired,
};
