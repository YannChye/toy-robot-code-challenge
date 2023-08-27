#!/usr/bin/env node
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  console.log(`received: ${input}`);
});
