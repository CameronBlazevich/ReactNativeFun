import React from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import TrainingProductScrollView from './trainingProductScrollView';
import FreeResourcesScrollView from './freeResourcesScrollView';
import TrainingProductApi from '../services/mockServices/mockTrainingProductApi';
import store from '../appStore';
import * as homeIcon from '../icons/home-icon.png';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  body: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  // headingContainer: {
  //   height: 40,
  //   justifyContent: 'center',
  // },
  // heading: {
  //   fontWeight: 'bold',
  //   fontSize: 20,
  // },
});

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) =>
      <Image source={homeIcon.default} style={[styles.icon, { tintColor }]} />,
  };

  static async getAllTrainingProducts() {
    const trainingProducts = await TrainingProductApi.getAllTrainingProducts();
    return trainingProducts;
  }

  constructor(props) {
    super(props);
    this.state = store.getState();

    store.subscribe(() => this.setState(store.getState));
  }

  async componentWillMount() {
    const trainingProducts = await MyHomeScreen.getAllTrainingProducts();
    store.dispatch({
      type: 'ADD_TRAINING_PRODUCTS',
      trainingProducts,
    });
  }

  openDetailsScreen = (productId) => {
    console.log(`Pressed ${productId}`);
    this.props.navigation.navigate('Details');
  };

  render() {
    const { trainingProducts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <ScrollView>
            <TrainingProductScrollView
              trainingProducts={trainingProducts}
              onSelectTrainingProduct={this.openDetailsScreen}
            />
            <View style={{ height: 35 }} />
            <FreeResourcesScrollView onSelectTrainingProduct={this.openDetailsScreen} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default MyHomeScreen;

MyHomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
