import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as dougPolkWinnerPhoto from '../img/Doug_Polk_Winner_Photo.jpg';

const styles = StyleSheet.create({
  preview: {
    width: 125,
    height: 100,
    margin: 5,
  },
});

function VideoPreview() {
  return <Image style={styles.preview} source={dougPolkWinnerPhoto.default} />;
}

export default VideoPreview;
