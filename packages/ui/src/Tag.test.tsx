// Kiebitz - Privacy-Friendly Appointments
// Copyright (C) 2021-2021 The Kiebitz Authors
// README.md contains license information.

import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import * as stories from "./Tag.stories";

const { Default } = composeStories(stories);

describe("ui/Tag", () => {
  it("should render", async () => {
    expect.hasAssertions();

    render(<Default />);

    const element = screen.getAllByText("Tag");
    expect(element).not.toBeNull();
  });
});