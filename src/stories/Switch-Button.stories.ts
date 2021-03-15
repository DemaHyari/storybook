import { Meta, Story } from "@storybook/angular/types-6-0";
import { SwitchButtonComponent } from "src/app/switch-button/switch-button.component";

export default {
  title: 'Switch Button',
  component: SwitchButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SwitchButtonComponent> = (args: SwitchButtonComponent) => ({
  component: SwitchButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  
};
