import { Meta, Story } from "@storybook/angular/types-6-0";
import { NotificationComponent } from "src/app/notification/notification.component";

export default{
  title: 'Notification',
  component: NotificationComponent,
} as Meta

const Template: Story<NotificationComponent> = (args: NotificationComponent) => ({
  component: NotificationComponent,
  props: args,
});
export const Basic = Template.bind({});
Basic.args = {
  title: 'Basic Notification Title'
};

export const Button = Template.bind({});
Button.args = {
  title: 'Button Notification Title',
  button: true
};

export const InfoIcon = Template.bind({});
InfoIcon.args = {
  info: true,
  icon: true
};

export const WarningIcon = Template.bind({});
WarningIcon.args = {
  warning: true,
  icon: true
};

export const ErrorIcon = Template.bind({});
ErrorIcon.args = {
  error: true,
  icon: true
};

export const SuccessIcon = Template.bind({});
SuccessIcon.args = {
  success: true,
  icon: true
};
