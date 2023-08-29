import { CommandOptions, Direction } from "./types";

export const INSTRUCTION =
  "-------------------------\n" +
  "TOY ROBOT CODE CHALLENGE\n" +
  "-------------------------\n" +
  "This is an example of the Toy Robot challenge, " +
  "which simulates a toy robot moving on a square table top, " +
  "of dimensions 5 units x 5 units. " +
  "You can enter the following commands to make the robot move on the table surface, " +
  "however any movement that would result in the robot falling from the table will be ignored.";

export const COMMANDS = [
  {
    command: `${CommandOptions.PLACE} X,Y,F`,
    description:
      "Puts the toy robot on the table in position X,Y and facing F,",
  },
  {
    description: "where X is a number between 0-4 indicating the x position,",
  },
  {
    description: "Y is a number between 0-4 indicating the y position,",
  },
  {
    description: `and F is either of ${Direction.NORTH},  ${Direction.EAST}, ${Direction.SOUTH}, or ${Direction.WEST}.`,
  },
  {
    description:
      "Robot must be placed before any other command can be executed.",
  },
  {
    command: CommandOptions.MOVE,
    description:
      "Moves the toy robot one unit forward in the direction that it is facing.",
  },
  {
    command: CommandOptions.LEFT,
    description: "Rotates the robot 90 degrees to the left.",
  },
  {
    command: CommandOptions.RIGHT,
    description: "Rotates the robot 90 degrees to the right.",
  },
  {
    command: CommandOptions.REPORT,
    description: "Reports the X,Y, and F of the robot.",
  },
];

export const ROBOT_NOT_PLACED_ERROR =
  "Please place robot in a valid location first";

export const ROBOT_INVALID_LOCATION_ERROR = "Robot cannot move there";

export const INVALID_COMMAND_ERROR = "This command is invalid";
