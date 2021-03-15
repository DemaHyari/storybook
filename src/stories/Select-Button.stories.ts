import { Meta, Story } from "@storybook/angular/types-6-0";
import { SelectButtonComponent } from "src/app/select-button/select-button.component";

export default{
  title: 'Select Button',
  component: SelectButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<SelectButtonComponent> = (args: SelectButtonComponent) => ({
  component: SelectButtonComponent,
  props: args,
});

export const Label = Template.bind({});
Label.args = {
  label: true,
  labelText: 'Select Label',
  message: true,
  messageText: 'Error Massage'
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: false,
  labelText: 'Select Label',
  message: true,
  messageText: 'Error Massage'
};

export const Message = Template.bind({});
Message.args = {
  label: true,
  labelText: 'Select Label',
  message: false,
};
