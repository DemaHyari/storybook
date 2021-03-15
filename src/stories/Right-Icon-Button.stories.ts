import { Meta, Story } from "@storybook/angular/types-6-0";
import { RightIconButtonComponent } from "src/app/right-icon-button/right-icon-button.component";

export default{
  title: 'Right Icon Button',
  component: RightIconButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<RightIconButtonComponent> = (args: RightIconButtonComponent) => ({
  component: RightIconButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Label',
};

export const Danger = Template.bind({});
Danger.args = {

  danger: true,
  label: 'Label',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  primaryOutline: true,
  label: 'Label',
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  dangerOutline: true,
  label: 'Label',
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  label: 'Label',
};

export const Dashed = Template.bind({});
Dashed.args = {
  dashed: true,
  label: 'Label',
};
