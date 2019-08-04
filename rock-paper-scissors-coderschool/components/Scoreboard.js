import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../constants';


const getScoreContainerStyle = (typeOfPlayer) => {
  if (typeOfPlayer === 'Player') {
    return styles.playerScoreContainer;
  } else if (typeOfPlayer === 'Computer') {
    return styles.computerScoreContainer;
  }
}

const checkColorAcePlayer = (isAce) => {
  if (isAce) {
    return styles.backgroundAce
  } else {
    return styles.backgroundGray
  }
}

const Scoreboard = ({
  ...props
}) => {
  return (
    <View style={[
        styles.scoreContainer,
        getScoreContainerStyle(props.typeOfPlayer),
        checkColorAcePlayer(props.ace)
      ]}>
      <Text style={styles.score}>{props.score}</Text>
    </View>
  );
};

Scoreboard.propTypes = {
  score: PropTypes.number,
  typeOfPlayer: PropTypes.string,
};

const styles = {
  scoreContainer: {
    width: 200,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.white,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.4,
  },
  playerScoreContainer: {
    borderWidth: 3,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  computerScoreContainer: {
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  score: {
    fontSize: 25,
    fontWeight: '600',
    backgroundColor: Colors.transparent,
    color: Colors.black,
  },
  backgroundAce: {
    backgroundColor: Colors.orange
  },
  backgroundGray: {
    backgroundColor: Colors.transparentBlack
  }
};

export default Scoreboard;
