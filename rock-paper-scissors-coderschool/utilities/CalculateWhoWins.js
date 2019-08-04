import { truthTable } from "../constants";

export default function calculateWhoWins(playerChoice, computerChoice) {
  if (playerChoice < 0 || playerChoice > 2 || computerChoice < 0 || computerChoice > 2) {
    throw 'Invalid inputs';
  }

  const playerScore = truthTable[playerChoice][computerChoice];
  const computerScore = truthTable[computerChoice][playerChoice];

  if (playerScore > computerScore) {
    return 'Player';
  } else if (computerScore > playerScore) {
    return 'Computer';
  } else if (playerScore === computerScore) {
    return 'Nobody';
  }
}
