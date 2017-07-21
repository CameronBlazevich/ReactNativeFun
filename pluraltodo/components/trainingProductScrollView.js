import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HeadingRow from './headingRow';
import TrainingProductPreview from './trainingProductPreview';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#36454f',
  },
  scrollContainer: {},
});

function TrainingProductScrollView(props) {
  // console.log(JSON.stringify(props.trainingProducts));
  const productPairArray = [];
  let pair = [];

  props.trainingProducts.forEach((product, index) => {
    pair.push(product);
    if (product.id % 2 !== 0 || index === props.trainingProducts.length - 1) {
      productPairArray.push(pair);
      pair = [];
    }
  });

  const trainingProducts = productPairArray.map(productPair =>
    (<View>
      {productPair.map(product =>
        (<TrainingProductPreview
          key={product.id}
          title={product.title}
          imageLocation={product.imageLocation}
          onSelectTrainingProduct={props.onSelectTrainingProduct}
        />),
      )}
    </View>),
  );

  return (
    <View style={styles.container}>
      <HeadingRow text="Training Products" />
      <ScrollView horizontal style={styles.scrollContainer}>
        {trainingProducts}
      </ScrollView>
    </View>
  );
}

export default TrainingProductScrollView;
