import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  headingContainer: {
    height: 40,
    justifyContent: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

function HeadingRow(props) {
  return (
    <View style={styles.headingContainer}>
      <Text style={[styles.heading, { color: props.color }]}>
        {props.text}
      </Text>
    </View>
  );
}

export default HeadingRow;

HeadingRow.defaultProps = {
  color: 'black',
};

HeadingRow.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
