import { Meta, Story } from "@storybook/angular/types-6-0";
import { RadioButtonComponent } from "src/app/radio-button/radio-button.component";

export default {
  title: 'Radio Button',
  component: RadioButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<RadioButtonComponent> = (args: RadioButtonComponent) => ({
  component: RadioButtonComponent,
  props: args,
});

export const Label = Template.bind({});
Label.args = {
  label: true,
  labelText: 'Radio Label'
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: false,
  labelText: 'Radio Label'
};
