import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonGroupComponent } from "src/app/button-group/button-group.component";

export default{
  title: 'Group Button',
  component: ButtonGroupComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
  component: ButtonGroupComponent,
  props: args,
});

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  outline: false,
  text: true,
  LeftLabel: 'Label',
  centerLabel: 'Label',
  rightLabel: 'Label'
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  outline: false,
  icon: true,
  LeftLabel: 'Label',
  centerLabel: 'Label',
  rightLabel: 'Label',
};

export const OutlineText = Template.bind({});
OutlineText.args = {
  outline: false,
  text: true,
  LeftLabel: 'Label',
  centerLabel: 'Label',
  rightLabel: 'Label',
};

export const OutlineIcon = Template.bind({});
OutlineIcon.args = {
  outline: true,
  icon: true,
  LeftLabel: 'Label',
  centerLabel: 'Label',
  rightLabel: 'Label'
};
