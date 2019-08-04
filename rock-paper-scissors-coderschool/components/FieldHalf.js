import React from 'react';
import { Dimensions, View } from 'react-native';

import { choices } from '../constants';

function getFieldHalfContainerStyle(typeOfPlayer) {
  if (typeOfPlayer === choices[1]) {
    return styles.lowerFieldHalfContainer;
  } else if (typeOfPlayer === 'Computer') {
    return styles.upperFieldHalfContainer;
  }
}

const FieldHalf = props => {
  return (
    <View style={[styles.fieldHalfContainer, getFieldHalfContainerStyle(props.typeOfPlayer)]}>
      {props.children}
    </View>
  );
};

const { height, width } = Dimensions.get('window');
const styles = {
  fieldHalfContainer: {
    height: height / 5*2,
    width: width,
  },
  upperFieldHalfContainer: {
    justifyContent: 'flex-end',
  },
  lowerFieldHalfContainer: {
    justifyContent: 'space-between',
  },
};

export default FieldHalf;
