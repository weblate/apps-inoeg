import { render, screen } from "@testing-library/react";
// import { axe } from "jest-axe";
import { Input as Default } from "./Input";

describe("uI/Input", () => {
  it("should render", async () => {
    expect.hasAssertions();

    // const { container } =
    render(<Default />);

    const Element = screen.getByRole(/textbox/i);
    expect(Element).not.toBeNull();

    // await expect(axe(container)).resolves.toHaveNoViolations();
  });

  // it("should render play function", async () => {
  //   expect.hasAssertions();

  //   const InputFieldFilled = composeStory(
  //     stories.InputFieldFilled,
  //     stories.default
  //   );

  //   const { container } = render(<InputFieldFilled />);

  //   await InputFieldFilled.play({ canvasElement: container });

  //   const input = screen.getByRole("textbox") as HTMLInputElement;

  //   expect(input.value).toBe("Hello world!");
  // });
});