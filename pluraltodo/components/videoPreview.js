import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  preview: {
    width: 160,
    height: 120,
    margin: 5,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
  },
  video: {
    height: 450,
    width: 500,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 165,
    height: 165,
  },
});

function VideoPreview(props) {
  return (
    <TouchableOpacity onPress={props.onPressVideo}>
      <View style={styles.container}>
        <Image
          source={{ uri: props.video.thumbnailUrl }}
          style={styles.preview}
          resizeMode={Image.resizeMode.cover}
        />
        <Text style={styles.title}>
          {props.video.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default VideoPreview;

VideoPreview.propTypes = {
  video: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onPressVideo: PropTypes.func.isRequired,
};
