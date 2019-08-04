import { messages } from "../constants";

export default function generateAlertMessage(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return messages[0];
  } else if (
    (playerChoice === 0 && computerChoice === 2) ||
    (playerChoice === 2 && computerChoice === 0)
  ) {
    return messages[1];
  } else if (
    (playerChoice === 1 && computerChoice === 0) ||
    (playerChoice === 0 && computerChoice === 1)
  ) {
    return messages[2];
  } else if (
    (playerChoice === 2 && computerChoice === 1) ||
    (playerChoice === 1 && computerChoice === 2)
  ) {
    return messages[3];
  } else {
    throw 'Invalid inputs';
  }
}
