import React from 'react';
import { Image, Button, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as settingsIcon from '../icons/settings-icon1.png';

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

class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) =>
      <Image source={settingsIcon.default} style={[styles.icon, { tintColor }]} />,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text>This is the Settings Screen</Text>
        </View>
        <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
      </View>
    );
  }
}

export default SettingsScreen;

SettingsScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
