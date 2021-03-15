import { Meta, Story } from "@storybook/angular/types-6-0";
import { CounterComponent } from "src/app/counter/counter.component";

export default {
  title: 'Counter',
  component: CounterComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CounterComponent> = (args: CounterComponent) => ({
  component: CounterComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  primaryInverted: true
};


export const Important = Template.bind({});
Important.args = {
  important: true
};


export const Added = Template.bind({});
Added.args = {
  added: true
};

export const Removed = Template.bind({});
Removed.args = {
  removed: true
};
