import { Meta, Story } from '@storybook/angular/types-6-0';
import { TextButtonComponent } from 'src/app/text-button/text-button.component';
export default{
  title: 'Text Button',
  component: TextButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TextButtonComponent> = (args: TextButtonComponent) => ({
  component: TextButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Label',
};

export const Danger = Template.bind({});
Danger.args = {
  primary: false,
  danger: true,
  label: 'Label',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  primaryOutline: true,
  label: 'Label',
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  dangerOutline: true,
  label: 'Label',
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  label: 'Label',
};

export const Dashed = Template.bind({});
Dashed.args = {
  dashed: true,
  label: 'Label',
};

