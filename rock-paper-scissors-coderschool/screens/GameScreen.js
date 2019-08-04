import React, { Component } from 'react'

import { Alert, StatusBar, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import {
    FieldDivider,
    FieldHalf,
    ImageButtonContainer,
    Scoreboard,
    Username,
} from '../components';
import { Colors, players, choices } from '../constants';
import { calculateWhoWins, generateAlertMessage, generateComputerChoice } from '../utilities';
import calculateWhoWinMatch from '../utilities/CalculateMatchWins';

export default class GameScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="paw" style={{color: tintColor, fontSize: 20 }} />
    }

    state = {
        playerScore: 0,
        computerScore: 0,
        history: [],
    };

    componentWillUpdate(nextProps, nextState) {
        const winnerOfMatch = calculateWhoWinMatch(nextState['playerScore'], nextState['computerScore'])
        this.showWinnerOfMatchDialog(winnerOfMatch, nextState['history'])
    }
    
    onPressImageButton = (playerChoice) => {
        const computerChoice = generateComputerChoice();

        const winner = calculateWhoWins(playerChoice, computerChoice);

        this.showAlertDialog(winner, playerChoice, computerChoice);
    }

    showAlertDialog(winner, playerChoice, computerChoice) {
        const alertMessage = generateAlertMessage(playerChoice, computerChoice);

        Alert.alert(
            `${winner} Wins`,
            `Player chose ${choices[playerChoice]}
            \nComputer chose ${choices[computerChoice]}
            \n${alertMessage}`,

            [{ text: 'OK', onPress: () => this.addPointsToScoreboard(winner) }]
        );
    }

    showWinnerOfMatchDialog = (winnerOfMatch, history) => {
        if (winnerOfMatch) {
            if (winnerOfMatch === 'Player') {
                history.push('won')
            } else if (winnerOfMatch === 'Computer') {
                history.push('lose')
            } else {
                history.push('tied')
            }
    
            const countLose = history.filter((el) => {
                return el === 'lose'
            }).length
    
            const countWon= history.filter((el) => {
                return el === 'won'
            }).length
    
            const countTied = history.length - countLose - countWon
    
            Alert.alert(
                `End Game`,
                `${winnerOfMatch} Wins`,
    
                [{ text: 'OK', onPress: () => this.resetGame() }]
            );
        }
    }
    

    resetGame = () => {
        this.setState({
            playerScore: 0,
            computerScore: 0
        })
    }

    addPointsToScoreboard(winner) {
        const { playerScore, computerScore, history } = this.state;

        switch (winner) {
            case 'Player':
                this.setState({
                    playerScore: playerScore + 1,
                });
            break;

            case 'Computer':
                this.setState({
                    computerScore: computerScore + 1,
                });
            break;

            default:
                break;
        }
    }

    render() {
        const { computerScore, playerScore } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} />

                <View>
                    <FieldHalf typeOfPlayer={players[0]}>
                        <Scoreboard score={computerScore} ace={computerScore > playerScore ? true:false} typeOfPlayer={players[0]} />
                    </FieldHalf>

                    <FieldHalf typeOfPlayer={players[1]}>
                        <Scoreboard score={playerScore} ace={computerScore < playerScore ? true:false} typeOfPlayer={players[1]} />
                    </FieldHalf>
                    
                    <ImageButtonContainer
                        buttons={choices}
                        onPress={index => this.onPressImageButton(index)}
                    />

                    <Username username={players[0]} />

                    <FieldDivider />

                    <Username username={players[1]} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldBounds: {
    flex: 1,
    borderWidth: 3,
    borderColor: Colors.white,
  },
  textCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});