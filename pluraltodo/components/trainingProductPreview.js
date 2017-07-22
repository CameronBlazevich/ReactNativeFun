import React from 'react';
import { View, Image, StyleSheet, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  preview: {
    width: 125,
    height: 100,
    margin: 5,
    borderColor: 'black',
    // borderStyle: 'solid',
    borderWidth: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 155,
    height: 155,
  },
  title: {
    textAlign: 'center',
  },
});

function TrainingProductPreview(props) {
  return (
    <TouchableHighlight onPress={() => props.onSelectTrainingProduct(props.id)}>
      <View style={styles.container}>
        <Image style={styles.preview} source={{ uri: props.imageLocation }} />
        <Text style={styles.title}>
          {props.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

export default TrainingProductPreview;

TrainingProductPreview.propTypes = {
  imageLocation: PropTypes.string.isRequired,
  onSelectTrainingProduct: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
