import { Meta, Story } from "@storybook/angular/dist/client/preview/types-6-0";
import { MessageComponent } from "src/app/message/message.component";

export default{
  title: 'Message',
  component: MessageComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<MessageComponent> = (args: MessageComponent) => ({
  component: MessageComponent,
  props: args,
});

export const Success = Template.bind({});
Success.args = {
  success: true,
  label: 'This is Success Message'
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  label: 'This is Warning Message'
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  label: 'This is Erorr Message'
};

export const Info = Template.bind({});
Info.args = {
  info: true,
  label: 'This is Info Message'
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  label: 'This is Loading Message'
};







