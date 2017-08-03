import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import HeadingRow from './headingRow';
import TrainingProductPreview from './trainingProductPreview';

function FreeResourcesScrollView(props) {
  return (
    <View>
      <HeadingRow text="Free Resources" color="white" />
      <ScrollView horizontal>
        <View>
          <TrainingProductPreview
            id={7}
            title="Preflop Charts"
            imageLocation="https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/Preflop-guide-300x195.jpg"
            onSelectTrainingProduct={props.onSelectTrainingProduct}
          />
        </View>
        <View>
          <TrainingProductPreview
            id={8}
            title="Rules for Playing Flush Draws in 2017"
            imageLocation="https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/20-Rules-For-Playing-Flush-Draws-in-2017.png"
            onSelectTrainingProduct={props.onSelectTrainingProduct}
          />
        </View>
        <View>
          <TrainingProductPreview
            id={9}
            title="Heads-Up No Limit Video Series"
            imageLocation="https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Heads-Up-Video-Seriesv2.png"
            onSelectTrainingProduct={props.onSelectTrainingProduct}
          />
        </View>
        <View>
          <TrainingProductPreview
            id={10}
            title="10 Pot Limit Omaha Secrets Exposed"
            imageLocation="https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/10-PLO-Secrets-Exposed-v2-300x195.png"
            onSelectTrainingProduct={props.onSelectTrainingProduct}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default FreeResourcesScrollView;

FreeResourcesScrollView.propTypes = {
  onSelectTrainingProduct: PropTypes.func.isRequired,
};
