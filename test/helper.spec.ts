import { COLOR, colorMessage } from "../src/helper";

describe("color messsage", () => {
  it("should return string with correct color", () => {
    const message = "This is a message.";
    expect(colorMessage(message, COLOR.RED)).toBe(
      `${COLOR.RED}${message}${COLOR.RESET}`
    );
    expect(colorMessage(message, COLOR.GREEN)).toBe(
      `${COLOR.GREEN}${message}${COLOR.RESET}`
    );
  });
});
