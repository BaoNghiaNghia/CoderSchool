import { truthTable, MATCH_POINT } from "../constants";

export default function calculateWhoWinMatch(playerScore, computerScore) {
//   if (playerChoice < 0 || playerChoice > 2 || computerChoice < 0 || computerChoice > 2) {
//     throw 'Invalid inputs';
//   }

//   const playerScore = truthTable[playerChoice][computerChoice];
//   const computerScore = truthTable[computerChoice][playerChoice];

  if (playerScore === MATCH_POINT) {
    return 'Player';
  } else if (computerScore === MATCH_POINT) {
    return 'Computer';
  } 
}
