import React, { Component } from 'react'

import { Alert, StatusBar, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import {
    FieldDivider,
    FieldHalf,
    ImageButtonContainer,
    Scoreboard,
    Username,
} from '../components';
import { Colors } from '../constants';
import { calculateWhoWins, generateAlertMessage, generateComputerChoice } from '../utilities';

export default class GameScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="paw" style={{color: tintColor, fontSize: 20 }} />
    }

    state = {
        playerScore: 0,
        computerScore: 0,
    };
    
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

    addPointsToScoreboard(winner) {
        const { playerScore, computerScore } = this.state

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

const choices = ['Rock', 'Paper', 'Scissors'];

const players = ['Computer', 'Player'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldBounds: {
    flex: 1,
    borderWidth: 3,
    borderColor: Colors.white,
  },
});