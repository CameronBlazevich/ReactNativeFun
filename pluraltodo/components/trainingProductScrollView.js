import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import HeadingRow from './headingRow';
import TrainingProductPreview from './trainingProductPreview';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#36454f',
  },
  scrollContainer: {},
});

function BuildArrayOfPairsOfProductsForDisplayingTwoRows(props) {
  const productPairArray = [];
  let pair = [];

  props.trainingProducts.forEach((product, index) => {
    pair.push(product);
    if (product.id % 2 !== 0 || index === props.trainingProducts.length - 1) {
      productPairArray.push({ pair, id: index });
      pair = [];
    }
  });

  return productPairArray;
}

function MapProductPairsToViewComponentsContainingUpToTwoProducts(productPairArray, props) {
  const trainingProductsForDisplay = productPairArray.map(productPair =>
    (<View key={productPair.id}>
      {productPair.pair.map(product =>
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
  const productPairArray = BuildArrayOfPairsOfProductsForDisplayingTwoRows(props);
  const trainingProductsForDisplay = MapProductPairsToViewComponentsContainingUpToTwoProducts(
    productPairArray,
    props,
  );

  return (
    <View style={styles.container}>
      <HeadingRow text="Training Products" />
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
