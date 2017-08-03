import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import HeadingRow from './headingRow';
import TrainingProductPreview from './trainingProductPreview';
import ArrayManipulation from '../services/arrayManipulation';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#36454f',
  },
  scrollContainer: {},
});

function MapProductPairsToViewComponentsContainingUpToTwoProducts(productPairArray, props) {
  const trainingProductsForDisplay = productPairArray.map(productPair =>
    (<View key={productPair.id}>
      {productPair.pairEntry.map(product =>
        (<TrainingProductPreview
          key={product.id}
          id={product.id}
          title={product.title}
          imageLocation={product.imageLocation}
          onSelectTrainingProduct={props.onSelectTrainingProduct}
        />),
      )}
    </View>),
  );

  return trainingProductsForDisplay;
}

function TrainingProductScrollView(props) {
  const productPairArray = ArrayManipulation.createArrayOfPairsFromOriginalArray(
    props.trainingProducts,
  );
  const trainingProductsForDisplay = MapProductPairsToViewComponentsContainingUpToTwoProducts(
    productPairArray,
    props,
  );

  return (
    <View style={styles.container}>
      <HeadingRow text="Training Products" color="white" />
      <ScrollView horizontal style={styles.scrollContainer}>
        {trainingProductsForDisplay}
      </ScrollView>
    </View>
  );
}

export default TrainingProductScrollView;

TrainingProductScrollView.propTypes = {
  trainingProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectTrainingProduct: PropTypes.func.isRequired,
};
