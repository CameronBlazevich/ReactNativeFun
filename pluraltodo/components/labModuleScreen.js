import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import store from '../appStore';
import LabApi from '../services/mockServices/mockLabApi';
import HeadingRow from './headingRow';
import ArrayManipulation from '../services/arrayManipulation';
import BackgroundImage from './backgroundImage';

const styles = StyleSheet.create({
  previewImage: { flex: 8 },
  previewTextContainer: {
    flex: 3,
    backgroundColor: 'red',
    alignItems: 'center',
    alignContent: 'center',
    padding: 3,
  },
  previewTitleText: {
    textAlign: 'center',
    fontSize: 14,
  },
  previewDescriptionText: {
    textAlign: 'center',
    fontSize: 10,
  },
});

class LabModuleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState())); // eslint-disable-line react/no-set-state
  }

  async componentWillMount() {
    const labInfo = await LabApi.getLabModuleById(this.state.selectedLabModuleId);
    if (labInfo.length > 0) {
      store.dispatch({ type: 'LAB_MODULE_DETAILS_LOADED', labInfo: labInfo[0] });
    }
  }

  render() {
    const labModuleSectionPairs = ArrayManipulation.createArrayOfPairsFromOriginalArray(
      this.state.selectedLabModuleDetails.sections,
    );

    const labModuleSectionsForDisplay = labModuleSectionPairs.map((sectionPair, index) =>
      (<View key={index.toString()} style={{ flexDirection: 'row', height: 225, width: 350 }}>
        {sectionPair.pairEntry.map(section =>
          (<View key={section.id} style={{ flex: 1, margin: 5, flexDirection: 'column' }}>
            <Image style={styles.previewImage} source={{ uri: section.previewImageUrl }} />
            <View style={styles.previewTextContainer}>
              <Text style={styles.previewTitleText}>
                {section.title}
              </Text>
              <Text style={styles.previewDescriptionText}>
                {section.description}
              </Text>
            </View>
          </View>),
        )}
      </View>),
    );

    return (
      <BackgroundImage>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <HeadingRow text={this.state.selectedLabModuleDetails.title || ''} color="white" />
          <ScrollView>
            {labModuleSectionsForDisplay}
          </ScrollView>
        </View>
      </BackgroundImage>
    );
  }
}

export default LabModuleScreen;
