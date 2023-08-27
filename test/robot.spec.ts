import Robot from "../src/robot";
import Table from "../src/table";
import { Direction, Placement } from "../src/types";

describe("Robot", () => {
  const mockIsValidPlacement = jest.fn();

  let robot: Robot;
  const defaultPlacement: Placement = {
    xPosition: 1,
    yPosition: 1,
    direction: Direction.NORTH,
  };

  beforeEach(() => {
    robot = new Robot();
    Table.isValidPlacement = mockIsValidPlacement.mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("place robot", () => {
    it("will place robot if valid placement", () => {
      robot.place(defaultPlacement);
      expect(robot.xPosition).toBe(defaultPlacement.xPosition);
      expect(robot.yPosition).toBe(defaultPlacement.yPosition);
      expect(robot.direction).toBe(defaultPlacement.direction);
    });

    it("will not place robot if invalid placement", () => {
      mockIsValidPlacement.mockReturnValue(false);
      robot.place(defaultPlacement);
      expect(robot.xPosition).toBeFalsy();
      expect(robot.yPosition).toBeFalsy();
      expect(robot.direction).toBeFalsy();
    });
  });

  describe("move robot", () => {
    it("will increase y position if facing north", () => {
      robot.place(defaultPlacement);
      robot.move();
      expect(robot.xPosition).toBe(defaultPlacement.xPosition);
      expect(robot.yPosition).toBe(defaultPlacement.yPosition + 1);
      expect(robot.direction).toBe(defaultPlacement.direction);
    });

    it("will increase x position if facing east", () => {
      robot.place({ ...defaultPlacement, direction: Direction.EAST });
      robot.move();
      expect(robot.xPosition).toBe(defaultPlacement.xPosition + 1);
      expect(robot.yPosition).toBe(defaultPlacement.yPosition);
      expect(robot.direction).toBe(Direction.EAST);
    });

    it("will decrease y position if facing south", () => {
      robot.place({ ...defaultPlacement, direction: Direction.SOUTH });
      robot.move();
      expect(robot.xPosition).toBe(defaultPlacement.xPosition);
      expect(robot.yPosition).toBe(defaultPlacement.yPosition - 1);
      expect(robot.direction).toBe(Direction.SOUTH);
    });

    it("will decrease x position if facing west", () => {
      robot.place({ ...defaultPlacement, direction: Direction.WEST });
      robot.move();
      expect(robot.xPosition).toBe(defaultPlacement.xPosition - 1);
      expect(robot.yPosition).toBe(defaultPlacement.yPosition);
      expect(robot.direction).toBe(Direction.WEST);
    });

    it("will not move if not already placed", () => {
      robot.move();
      expect(robot.xPosition).toBeFalsy();
      expect(robot.yPosition).toBeFalsy();
      expect(robot.direction).toBeFalsy();
    });
  });

  describe("turn robot", () => {
    it("can turn left", () => {
      robot.place(defaultPlacement);
      robot.turn("left");
      expect(robot.direction).toBe(Direction.WEST);
    });

    it("can turn right", () => {
      robot.place(defaultPlacement);
      robot.turn("right");
      expect(robot.direction).toBe(Direction.EAST);
    });

    it("will not turn if not placed beforehand", () => {
      robot.turn("left");
      expect(robot.direction).toBeFalsy();
    });
  });

  describe("report robot placemet", () => {
    const logSpy = jest.spyOn(console, "log");
    it("will report valid placement", () => {
      robot.place(defaultPlacement);
      robot.report();
      expect(logSpy).toHaveBeenCalledWith(
        `${defaultPlacement.xPosition},${defaultPlacement.yPosition},${defaultPlacement.direction}`
      );
    });

    it("will not report if not placed beforehand", () => {
      robot.report();
      expect(logSpy).toBeCalledTimes(0);
    });
  });
});
