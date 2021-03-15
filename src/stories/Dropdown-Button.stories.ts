import { Meta, Story } from "@storybook/angular/types-6-0";
import { DropdownButtonComponent } from "src/app/dropdown-button/dropdown-button.component";

export default{
  title: 'Dropdown Button',
  component: DropdownButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<DropdownButtonComponent> = (args: DropdownButtonComponent) => ({
  component: DropdownButtonComponent,
  props: args,
});

export const PrimaryDropdown = Template.bind({});
PrimaryDropdown.args = {
  primary: true,
  label: 'Label',
};

export const DangerDropdown = Template.bind({});
DangerDropdown.args = {

  danger: true,
  label: 'Label',
};

export const PrimaryOutlineDropdown = Template.bind({});
PrimaryOutlineDropdown.args = {
  primaryOutline: true,
  label: 'Label',
};

export const DangerOutlineDropdown = Template.bind({});
DangerOutlineDropdown.args = {
  dangerOutline: true,
  label: 'Label',
};

export const OutlineDropdown = Template.bind({});
OutlineDropdown.args = {
  outline: true,
  label: 'Label',
};

export const DashedDropdown = Template.bind({});
DashedDropdown.args = {
  dashed: true,
  label: 'Label',
};
