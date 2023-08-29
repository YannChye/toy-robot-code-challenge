#!/usr/bin/env node
import readline from "readline";
import Controller from "./controller";
import { COMMANDS, INSTRUCTION } from "./constant";

const controller = new Controller();

console.log(INSTRUCTION);
console.table(COMMANDS);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

rl.on("line", (input: string) => {
  controller.parseCommand(input);
  rl.prompt();
});
