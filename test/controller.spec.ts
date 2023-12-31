import {
  INVALID_COMMAND_ERROR,
  ROBOT_INVALID_LOCATION_ERROR,
} from "../src/constant";
import Controller from "../src/controller";
import { CommandOptions } from "../src/types";

describe("Controller", () => {
  const logSpy = jest.spyOn(console, "log");

  let controller: Controller;
  const defaultLocation = "1,1,NORTH";

  beforeEach(() => {
    controller = new Controller();
    controller.parseCommand(`${CommandOptions.PLACE} ${defaultLocation}`);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("controller can handle valid input", () => {
    it("should place robot again on PLACE command", () => {
      const newPlacement = "3,3,EAST";
      controller.parseCommand(`${CommandOptions.PLACE} ${newPlacement}`);
      controller.parseCommand(CommandOptions.REPORT);
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringMatching(new RegExp(`${newPlacement}`))
      );
    });

    it("should turn left on LEFT command", () => {
      controller.parseCommand(CommandOptions.LEFT);
      controller.parseCommand(CommandOptions.REPORT);
      expect(logSpy).toHaveBeenCalledWith(expect.stringMatching("1,1,WEST"));
    });

    it("should not right on RIGHT command", () => {
      controller.parseCommand(CommandOptions.RIGHT);
      controller.parseCommand(CommandOptions.REPORT);
      expect(logSpy).toHaveBeenCalledWith(expect.stringMatching("1,1,EAST"));
    });

    it("should move on MOVE command", () => {
      controller.parseCommand(CommandOptions.MOVE);
      controller.parseCommand(CommandOptions.REPORT);
      expect(logSpy).toHaveBeenCalledWith(expect.stringMatching("1,2,NORTH"));
    });
  });

  describe("controller will ignore invalid input", () => {
    it("should ignore invalid command", () => {
      controller.parseCommand("FOO");
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringMatching(INVALID_COMMAND_ERROR)
      );
    });

    it("should ignore PLACE command without location", () => {
      controller.parseCommand(CommandOptions.PLACE);
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringMatching(INVALID_COMMAND_ERROR)
      );
    });

    it("should ignore PLACE command with invalid location", () => {
      controller.parseCommand(`${CommandOptions.PLACE} BAR,4,EAST`);
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringMatching(ROBOT_INVALID_LOCATION_ERROR)
      );
    });

    it("should ignore PLACE command with incomplete location", () => {
      controller.parseCommand(`${CommandOptions.PLACE} 1,4`);
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringMatching(INVALID_COMMAND_ERROR)
      );
    });
  });
});
