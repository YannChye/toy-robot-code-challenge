import { Direction, Placement } from "./types";

export default abstract class Table {
  public static width = 5;
  public static height = 5;

  public static isValidPlacement(placement: Placement): boolean {
    return (
      placement.xPosition >= 0 &&
      placement.xPosition < this.width &&
      placement.yPosition >= 0 &&
      placement.yPosition < this.height &&
      placement.direction in Direction
    );
  }
}
