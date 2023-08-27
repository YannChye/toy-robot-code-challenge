import Table from "../src/table";
import { Direction } from "../src/types";

describe("Checking table edge", () => {
  const defaultPlacement = {
    xPosition: 0,
    yPosition: 0,
    direction: Direction.NORTH,
  };

  it("should return true if within 5x5 table edge and correct direction", () => {
    expect(Table.isValidPlacement(defaultPlacement)).toBeTruthy();
    expect(
      Table.isValidPlacement({
        ...defaultPlacement,
        xPosition: 4,
        yPosition: 4,
      })
    ).toBeTruthy();
  });

  it("should return false if x-axis is over the table edge", () => {
    expect(
      Table.isValidPlacement({
        ...defaultPlacement,
        xPosition: -1,
      })
    ).toBeFalsy();
    expect(
      Table.isValidPlacement({
        ...defaultPlacement,
        xPosition: 5,
      })
    ).toBeFalsy();
  });

  it("should return false if y-axis is over the table edge", () => {
    expect(
      Table.isValidPlacement({
        ...defaultPlacement,
        yPosition: -1,
      })
    ).toBeFalsy();
    expect(
      Table.isValidPlacement({
        ...defaultPlacement,
        yPosition: 5,
      })
    ).toBeFalsy();
  });

  it("should return false if x-axis and y-axis are both over the table edge", () => {
    expect(
      Table.isValidPlacement({
        ...defaultPlacement,
        xPosition: -1,
        yPosition: -1,
      })
    ).toBeFalsy();
    expect(
      Table.isValidPlacement({
        ...defaultPlacement,
        xPosition: 5,
        yPosition: 5,
      })
    ).toBeFalsy();
  });

  it("should return false if direction is incorrect", () => {
    expect(
      Table.isValidPlacement({ ...defaultPlacement, direction: "INVALID" })
    ).toBeFalsy();
    expect(
      Table.isValidPlacement({ ...defaultPlacement, direction: "" })
    ).toBeFalsy();
  });

  it("should return false if value is invalid", () => {
    expect(
      Table.isValidPlacement({ ...defaultPlacement, xPosition: NaN })
    ).toBeFalsy();
  });
});
