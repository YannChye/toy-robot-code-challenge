import { ROBOT_INVALID_LOCATION_ERROR, ROBOT_NOT_PLACED_ERROR } from "./constant";
import { COLOR, colorMessage } from "./helper";
import Table from "./table";
import { Direction, Placement } from "./types";

export default class Robot {
  public xPosition = NaN;
  public yPosition = NaN;
  public direction: Direction | undefined = undefined;

  public place(placement: Placement): void {
    if (Table.isValidPlacement(placement)) {
      this.xPosition = placement.xPosition;
      this.yPosition = placement.yPosition;
      this.direction = placement.direction as Direction;
    } else {
      console.log(colorMessage(ROBOT_INVALID_LOCATION_ERROR, COLOR.RED));
    }
  }

  public move(): void {
    let newXPosition = this.xPosition;
    let newYPosition = this.yPosition;
    switch (this.direction) {
      case Direction.NORTH:
        newYPosition += 1;
        break;
      case Direction.EAST:
        newXPosition += 1;
        break;
      case Direction.SOUTH:
        newYPosition -= 1;
        break;
      case Direction.WEST:
        newXPosition -= 1;
        break;
      default:
        console.log(colorMessage(ROBOT_NOT_PLACED_ERROR, COLOR.RED));
        return;
    }
    this.place({
      xPosition: newXPosition,
      yPosition: newYPosition,
      direction: this.direction,
    });
  }

  public turn(turn: "left" | "right"): void {
    let directionIndex = this.direction
      ? Object.values(Direction).indexOf(this.direction)
      : -1;
    if (directionIndex >= 0) {
      turn === "left" ? (directionIndex -= 1) : (directionIndex += 1);
      directionIndex = (directionIndex + 4) % 4;
      this.direction = Object.values(Direction)[directionIndex];
    } else {
      console.log(colorMessage(ROBOT_NOT_PLACED_ERROR, COLOR.RED));
    }
  }

  public report(): void {
    if (
      !Number.isNaN(this.xPosition) &&
      !Number.isNaN(this.yPosition) &&
      this.direction
    ) {
      console.log(
        colorMessage(
          `Robot location: ${this.xPosition},${this.yPosition},${this.direction}`,
          COLOR.GREEN
        )
      );
    } else {
      console.log(colorMessage(ROBOT_NOT_PLACED_ERROR, COLOR.RED));
    }
  }
}
