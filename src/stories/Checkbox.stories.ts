import { Meta, Story } from "@storybook/angular/types-6-0";
import { CheckboxComponent } from "src/app/checkbox/checkbox.component";

export default {
  title: 'Check Box',
  component: CheckboxComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  component: CheckboxComponent,
  props: args,
});

export const Label = Template.bind({});
Label.args = {
  label: true,
  labelText: 'Checkbox'
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: false,
};
