import { Meta, Story } from "@storybook/angular/types-6-0";
import { RateComponent } from "src/app/rate/rate.component";

export default{
  title: 'Rate',
  component: RateComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<RateComponent> = (args: RateComponent) => ({
  component: RateComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  
};
