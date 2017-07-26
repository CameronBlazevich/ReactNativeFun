import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import VideoPreview from './videoPreview';

function VideoScrollView(props) {
  return (
    <ScrollView horizontal>
      {props.videos.map(video =>
        (<VideoPreview
          key={video.id}
          video={video}
          onPressVideo={() => props.navigation.navigate('VideoPlayer', { videoId: video.id })}
        />),
      )}
    </ScrollView>
  );
}

export default VideoScrollView;

VideoScrollView.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
