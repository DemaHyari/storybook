import { Meta, Story } from "@storybook/angular/types-6-0";
import { ExtendedButtonComponent } from "src/app/extended-button/extended-button.component";

export default{
  title: 'Extended Button',
  component: ExtendedButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ExtendedButtonComponent> = (args: ExtendedButtonComponent) => ({
  component: ExtendedButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Extended FAB',
};

export const Danger = Template.bind({});
Danger.args = {
  danger: true,
  label: 'Extended FAB',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  primaryOutline: true,
  label: 'Extended FAB',
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  dangerOutline: true,
  label: 'Extended FAB',
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  label: 'Extended FAB',
};

export const Dashed = Template.bind({});
Dashed.args = {
  dashed: true,
  label: 'Extended FAB',
};

