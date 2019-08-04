import { Dimensions } from 'react-native';

const choices = ['Rock', 'Paper', 'Scissors'];

const players = ['Computer', 'Player'];

const truthTable = [
    [0,0,1],
    [1,0,0],
    [0,1,0]
]

const messages = ['Draw', 'Rock crushes Scissors', 'Paper covers Rock', 'Scissors cut Paper'];

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const MATCH_POINT = 3;

export {
    choices,
    players,
    truthTable,
    messages,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    MATCH_POINT
}

export Colors from './Colors';
export Images from './Images';