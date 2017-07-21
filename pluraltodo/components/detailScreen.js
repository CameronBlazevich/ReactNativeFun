import React from 'react';
import { Image, Button, StyleSheet, View, Text } from 'react-native';

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
  render(props) {
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
