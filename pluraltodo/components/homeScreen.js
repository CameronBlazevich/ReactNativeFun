import React from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
// import PropTypes from 'prop-types';
import TrainingProductScrollView from './trainingProductScrollView';
import FreeResourcesScrollView from './freeResourcesScrollView';
import TrainingProductApi from '../services/mockServices/mockTrainingProductApi';

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
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) =>
      <Image source={require('../icons/home-icon.png')} style={[styles.icon, { tintColor }]} />,
  };

  constructor(props) {
    super(props);
    this.state = { trainingProducts: [] };

    this.getAllTrainingProducts = this.getAllTrainingProducts.bind(this);
  }

  async componentWillMount() {
    const trainingProducts = await this.getAllTrainingProducts();
    this.setState({ trainingProducts });
  }

  async getAllTrainingProducts() {
    const trainingProducts = await TrainingProductApi.getAllTrainingProducts();
    return trainingProducts;
  }

  openDetailsScreen = () => {
    console.log('Pressed');
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
            <FreeResourcesScrollView />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default MyHomeScreen;

MyHomeScreen.propTypes = {
  navigation: PropTypes.func.isRequired,
};
