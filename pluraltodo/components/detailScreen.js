import React from 'react';
import { Button, StyleSheet, View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import TrainingProductPreview from './trainingProductPreview';
import store from '../appStore';
// import TrainingProductDetailApi from '../services/mockServices/mockTrainingProductDetailApi';
import LabApi from '../services/mockServices/mockLabApi';
import ArrayManipulation from '../services/arrayManipulation';
import HeadingRow from './headingRow';
import BackgroundImage from './backgroundImage';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  body: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {},
});

class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  async componentWillMount() {
    // need to figure out how to pass props on navigation
    // const id = 1;
    // const productDetail = await TrainingProductDetailApi.getTrainingProductDetailById(id);
    const labModules = await LabApi.getAllLabModules();
    store.dispatch({ type: 'ADD_LAB_DETAILS', labModules });
  }
  clicked = (moduleId) => {
    store.dispatch({ type: 'LAB_MODULE_SELECTED', moduleId });
    this.props.navigation.navigate('LabModule');
  };
  render() {
    const modulePairArray = ArrayManipulation.createArrayOfPairsFromOriginalArray(
      this.state.labModules,
    );

    const modulesForDisplay = modulePairArray.map((modulePair, index) =>
      (<View
        key={index.toString()}
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {modulePair.pairEntry.map(module =>
          (<TrainingProductPreview
            key={module.id}
            id={module.id}
            title={module.title}
            imageLocation={module.imageLocation}
            onSelectTrainingProduct={this.clicked}
          />),
        )}
      </View>),
    );
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <HeadingRow text="The Lab" />
          <ScrollView style={styles.scrollView}>
            {modulesForDisplay}
          </ScrollView>
          <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
        </View>
      </BackgroundImage>
    );
  }
}

export default DetailScreen;

DetailScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
