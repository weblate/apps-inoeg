import type { Meta } from "@storybook/react";
import { FaqSection, FaqSectionProps } from "./FaqSection";

export default {
  component: FaqSection,
} as Meta<FaqSectionProps>;

export const Default = () => (
  <FaqSection title="Section title">Section Content</FaqSection>
);
