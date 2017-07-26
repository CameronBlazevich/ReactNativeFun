import React from 'react';
import { WebView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function VideoPlayer(props) {
  const videoId = props.navigation.state.params.videoId;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      <WebView
        style={styles.container}
        source={{
          uri: `https://www.youtube.com/embed/${videoId}?version=3&autoplay=1&showinfo=1&controls=2&modestbranding=1&fs=1&rel=0&color=red`,
        }}
      />
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={{ color: '#40b2bf' }}>Close this video</Text>
      </TouchableOpacity>
    </View>
  );
}

export default VideoPlayer;

VideoPlayer.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({ videoId: PropTypes.string.isRequired }).isRequired,
    }).isRequired,
  }).isRequired,
};
