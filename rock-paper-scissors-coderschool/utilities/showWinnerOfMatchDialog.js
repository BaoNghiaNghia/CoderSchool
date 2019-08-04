export default function showWinnerOfMatchDialog (winnerOfMatch, history) {
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
