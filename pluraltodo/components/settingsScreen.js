import React from 'react';
import { Image, Button, StyleSheet, View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import store from '../appStore';
// import TrainingProductApi from '../services/mockServices/mockTrainingProductApi';
import * as settingsIcon from '../icons/settings-icon1.png';
import * as userIcon from '../icons/user-icon.png';
import * as lockIcon from '../icons/lock-icon.png';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  iconLarge: {
    width: 50,
    height: 50,
  },
  lockIcon: {
    alignSelf: 'flex-end',
  },
  iconLargeContainer: {},
  panel: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 75,
    // justifyContent: 'center',
  },
  sectionHeader: {
    height: 55,
  },
  listItem: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: 40,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    // margin: 5,
  },
  container: {
    flex: 1,
  },
  textEmphasized: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  textSecondary: {
    fontSize: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) =>
      <Image source={settingsIcon.default} style={[styles.icon, { tintColor }]} />,
  };

  constructor(props) {
    super(props);

    this.state = store.getState();

    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.panel}>
          <View style={styles.userIconContainer}>
            <Image source={userIcon.default} style={styles.iconLarge} />
          </View>
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.textEmphasized}>
                {this.state.loggedInUser.userName}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textSecondary}>
                {this.state.loggedInUser.email}
              </Text>
            </View>
          </View>
        </View>
        <FlatList
          data={this.state.trainingProducts
            // .filter(product => product.purchased === 0)
            .map(product => product.title)}
          renderItem={({ item }) =>
            (<View style={styles.listItem}>
              <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                <Text>
                  {item}
                </Text>
              </View>
              {// DO NOT LEAVE THIS LIKE THIS
                this.state.trainingProducts.filter(product => product.title === item).length === 1 &&
                this.state.trainingProducts.filter(product => product.title === item)[0]
                  .purchased === 0 &&
                  <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                    <Image source={lockIcon.default} style={styles.icon} />
                  </View>}
            </View>)}
        />

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
