import { choices } from "../constants";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function generateComputerChoice() {
  return generateRandomNumber(0, choices.length - 1);
}
