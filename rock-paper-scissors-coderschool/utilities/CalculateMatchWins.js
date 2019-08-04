import { truthTable, MATCH_POINT } from "../constants";

export default function calculateWhoWinMatch(playerScore, computerScore) {
  if (playerScore === MATCH_POINT) {
    return 'Player';
  } else if (computerScore === MATCH_POINT) {
    return 'Computer';
  } 
}
