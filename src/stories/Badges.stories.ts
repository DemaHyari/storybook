import { Meta, Story } from "@storybook/angular/types-6-0";
import { BadgesComponent } from "src/app/badges/badges.component";

export default {
  title: 'Badges',
  component: BadgesComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BadgesComponent> = (args: BadgesComponent) => ({
  component: BadgesComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  label: 'Status',
  proccess: true,
};

export const IconText = Template.bind({});
IconText.args = {
  icon: true,
  label: 'Status',
  proccess: true,
};

export const Proccessing = Template.bind({});
Proccessing.args = {
  proccess: true,
  label: 'Status',
};

export const Success = Template.bind({});
Success.args = {
  success: true,
  label: 'Status',
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  label: 'Status',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  label: 'Status',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Status',
};



