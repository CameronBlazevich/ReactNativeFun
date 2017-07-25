import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  preview: {
    width: 160,
    height: 120,
    margin: 5,
  },
  video: {
    height: 450,
    width: 500,
  },
  title: {
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 165,
    height: 125,
  },
});

function VideoPreview({ video, onPressVideo }) {
  // console.log(`video: ${JSON.stringify(video)}`);
  return (
    <TouchableOpacity onPress={() => onPressVideo(video.id)}>
      <View style={styles.container}>
        <Image
          source={{ uri: video.thumbnailUrl }}
          style={styles.preview}
          resizeMode={Image.resizeMode.cover}
        />
        <Text style={styles.title}>
          {video.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default VideoPreview;

VideoPreview.propTypes = {
  video: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onPressVideo: PropTypes.func.isRequired,
};
