import { Meta, Story } from "@storybook/angular/types-6-0";
import { InputComponent } from "src/app/input/input.component";

export default{
  title: 'Input',
  component: InputComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<InputComponent> = (args: InputComponent) => ({
  component: InputComponent,
  props: args,
});

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: false,
  leftIcon: false,
  rightIcon: false
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: true,
  leftIcon: false,
  rightIcon: false
};

export const DoubleIcon = Template.bind({});
DoubleIcon.args = {
  label: true,
  leftIcon: true,
  rightIcon: true
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: true,
  leftIcon: false,
  rightIcon: true
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: true,
  leftIcon:  true,
  rightIcon: false
};

