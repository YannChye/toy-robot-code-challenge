#!/usr/bin/env node
import readline from "readline";
import Controller from "./controller";

const controller = new Controller();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input: string) => {
  controller.parseCommand(input);
});
