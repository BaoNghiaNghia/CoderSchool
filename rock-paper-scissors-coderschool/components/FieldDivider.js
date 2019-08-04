import React from 'react';
import { View } from 'react-native';

import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

const FieldDivider = () => {
  return <View style={styles.divider} />;
};

const styles = {
  divider: {
    position: 'absolute',
    top: SCREEN_HEIGHT / 5*2,
    width: SCREEN_WIDTH,
    borderTopWidth: 1.5,
    borderColor: Colors.white,
  },
};

export default FieldDivider;
