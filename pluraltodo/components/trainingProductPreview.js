import React from 'react';
import { View, Image, StyleSheet, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import * as lockIcon from '../icons/black-lock-icon.png';

const styles = StyleSheet.create({
  preview: {
    width: 155,
    height: 125,
    // margin: 5,
    borderColor: 'white',
    // borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    margin: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 165,
    height: 165,
    padding: 2,
    marginBottom: 4,
    // borderStyle: 'solid',
    // borderColor: 'white',
    // borderWidth: 1,
  },
  imageContainer: { flex: 4 },
  titleContainer: { flex: 1 },
  title: {
    textAlign: 'center',
    color: 'white',
  },
  icon: {
    opacity: 0.7,
    height: 70,
    width: 70,
  },
});

function TrainingProductPreview(props) {
  return (
    <TouchableHighlight onPress={() => props.onSelectTrainingProduct(props.id)}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.preview} source={{ uri: props.imageLocation }}>
            {
              // props.purchased === 0 && <Image source={lockIcon.default} style={styles.icon} />}
            }
          </Image>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {props.title}
          </Text>
        </View>
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
