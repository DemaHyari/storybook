import { ChipsComponent } from "src/app/chips/chips.component";
import { Meta, Story } from '@storybook/angular/types-6-0';

export default{
  title: 'Chips',
  component: ChipsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ChipsComponent> = (args: ChipsComponent) => ({
  component: ChipsComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Chip',
  default: true,
  rounded: true,
  outline: true
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Default Chip',
  primary: true,
  rounded: true
};

export const Positive = Template.bind({});
Positive.args = {
  label: 'Default Chip',
  positive: true,
  rounded: true
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Default Chip',
  warning: true,
  rounded: true
};

export const Error = Template.bind({});
Error.args = {
  label: 'Default Chip',
  error: true,
  rounded: true
};
export const Selected = Template.bind({});
Selected.args = {
  label: 'Selected Chip',
  primary: true,
  rounded: true,
  selected: true
};

export const Iconic = Template.bind({});
Iconic.args = {
  label: 'Iconic Chip',
  primary: true,
  rounded: true,
  iconic: true
};

export const Counter = Template.bind({});
Counter.args = {
  label: 'Counter Chip',
  primary: true,
  rounded: true,
  counter: true,
  count: 30
};

export const UserImage = Template.bind({});
UserImage.args = {
  label: 'User Image Chip',
  primary: true,
  rounded: true,
  userImage: true,
};

export const Addable = Template.bind({});
Addable.args = {
  label: 'Addable Chip',
  primary: true,
  rounded: true,
  addable: true
};

export const Removable = Template.bind({});
Removable.args = {
  label: 'Removable Chip',
  primary: true,
  rounded: true,
  removable: true
};


export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Chip',
  primary: true,
  rounded: true,
  disabled: true
};
