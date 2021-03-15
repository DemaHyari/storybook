import { Meta, Story } from "@storybook/angular/types-6-0";
import { AlertComponent } from "src/app/alert/alert.component";

export default{
  title: 'Alert',
  component: AlertComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  component: AlertComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  outline: true
};
export const Info = Template.bind({});
Info.args = {
  outline: true,
  info: true,
};

export const Warning = Template.bind({});
Warning.args = {
  outline: true,
  warning: true,
};

export const Error = Template.bind({});
Error.args = {
  outline: true,
  error: true,
};

export const Success = Template.bind({});
Success.args = {
  outline: true,
  success: true,
};

export const Banner = Template.bind({});
Banner.args = {
  outline: false
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  rightIcon: true
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  leftIcon: true
};

export const DoubleIcon = Template.bind({});
DoubleIcon.args = {
  rightIcon: true,
  leftIcon: true,
  error: true,
};

export const CloseText = Template.bind({});
CloseText.args = {
  rightIcon: false,
  leftIcon: false,
  closeText: true,
  warning: true,
};
