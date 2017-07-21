import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  preview: {
    width: 125,
    height: 100,
    margin: 5,
  },
});

function VideoPreview(props) {
  return <Image style={styles.preview} source={require('../img/Doug_Polk_Winner_Photo.jpg')} />;
}

export default VideoPreview;
