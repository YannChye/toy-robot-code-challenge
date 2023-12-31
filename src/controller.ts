import { INVALID_COMMAND_ERROR } from "./constant";
import { COLOR, colorMessage } from "./helper";
import Robot from "./robot";
import { CommandOptions, Placement } from "./types";

export default class Controller {
  private robot: Robot = new Robot();

  public parseCommand(command: string): void {
    const commandArray = command.trim().toUpperCase().split(" ", 2);
    let placement: Placement | undefined;
    switch (commandArray[0]) {
      case CommandOptions.PLACE:
        placement = this.convertToPlacement(commandArray[1]) ?? undefined;
        if (placement) {
          this.robot.place(placement);
        } else {
          console.log(colorMessage(INVALID_COMMAND_ERROR, COLOR.RED));
        }
        break;
      case CommandOptions.LEFT:
        this.robot.turn("left");
        break;
      case CommandOptions.RIGHT:
        this.robot.turn("right");
        break;
      case CommandOptions.MOVE:
        this.robot.move();
        break;
      case CommandOptions.REPORT:
        this.robot.report();
        break;
      default:
        console.log(colorMessage(INVALID_COMMAND_ERROR, COLOR.RED));
    }
  }

  private convertToPlacement(command: string): Placement | void {
    const commandArray: string[] = command?.toUpperCase().split(",", 3);
    if (commandArray?.length === 3) {
      return {
        xPosition: parseInt(commandArray[0]),
        yPosition: parseInt(commandArray[1]),
        direction: commandArray[2],
      } as Placement;
    }
  }
}
