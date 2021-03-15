import { Meta, Story } from "@storybook/angular/types-6-0";
import { DateComponent } from "src/app/date/date.component";

export default{
  title: 'Date',
  component: DateComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<DateComponent> = (args: DateComponent) => ({
  component: DateComponent,
  props: args,
});

export const Label = Template.bind({});
Label.args = {
  label: true,
  labelText: 'Label',
  message: true,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: false,
  message: true,
};

export const Message = Template.bind({});
Message.args = {
  label: true,
  labelText: 'Label',
  message: true,
};

export const ValidMessage = Template.bind({});
ValidMessage.args = {
  label: true,
  labelText: 'Label',
  message: true,
};

export const InvalidMessage = Template.bind({});
InvalidMessage.args = {
  label: true,
  labelText: 'Label',
  message: true,
  messageText: 'ERROR!'
};
