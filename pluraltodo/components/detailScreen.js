import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import TrainingProductDetailApi from '../services/mockServices/mockTrainingProductDetailApi';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});

class DetailScreen extends React.Component {
  async componentWillMount() {
    // need to figure out how to pass props on navigation
    const productDetail = await TrainingProductDetailApi.getTrainingProductDetailById(2);
    console.log(productDetail);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text>This is the Details Screen</Text>
        </View>
        <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
      </View>
    );
  }
}

export default DetailScreen;

DetailScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
