import React from 'react';
import { Dimensions, Text } from 'react-native';

import { Colors } from '../constants';

function getUsernameStyle(typeOfPlayer) {
  if (typeOfPlayer === 'Player') {
    return styles.lowerFieldUsername;
  } else if (typeOfPlayer === 'Computer') {
    return styles.upperFieldUsername;
  }
}

const Username = ({ username }) => {
  return <Text style={[styles.username, getUsernameStyle(username)]}>{username}</Text>;
};

const { height, width } = Dimensions.get('window');
const styles = {
  username: {
    position: 'absolute',
    left: 8,
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: Colors.transparent,
    color: Colors.black,
  },
  upperFieldUsername: {
    top: height / 5*2 - 150,
    left: width / 5*2
  },
  lowerFieldUsername: {
    top: height / 5*2 + 140,
    left: width / 5*2
  },
};

export default Username;
