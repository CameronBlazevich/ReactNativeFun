import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

class BackgroundImage extends React.Component {
  render() {
    return (
      <Image
        source={{
          uri: 'https://www.upswingpoker.com/wp-content/uploads/2017/06/2017-Upswing-Poker-BG.jpg',
        }}
        style={styles.backgroundImage}
      >
        {this.props.children}
      </Image>
    );
  }
}

export default BackgroundImage;
