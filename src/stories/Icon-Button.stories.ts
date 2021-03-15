import { Meta, Story } from "@storybook/angular/types-6-0";
import { ButtonIconComponent } from "src/app/button-icon/button-icon.component";

export default{
  title: 'Icon Button',
  component: ButtonIconComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonIconComponent> = (args: ButtonIconComponent) => ({
  component: ButtonIconComponent,
  props: args,
});

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  primary: true,
};

export const DangerIcon = Template.bind({});
DangerIcon.args = {
  danger: true,
};

export const PrimaryOutlineIcon = Template.bind({});
PrimaryOutlineIcon.args = {
  primaryOutline: true,
};

export const DangerOutlineIcon = Template.bind({});
DangerOutlineIcon.args = {
  dangerOutline: true,
};

export const OutlineIcon = Template.bind({});
OutlineIcon.args = {
  outline: true,
};

export const DashedIcon = Template.bind({});
DashedIcon.args = {
  dashed: true,
};
