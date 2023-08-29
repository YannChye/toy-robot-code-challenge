export enum COLOR {
  RED = "\x1b[31m",
  GREEN = "\x1b[32m",
  RESET = "\x1b[0m",
}

export function colorMessage(message: string, color: COLOR) {
  return color + message + COLOR.RESET;
}
