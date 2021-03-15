import { Meta, Story } from "@storybook/angular/types-6-0";
import { ResultComponent } from "src/app/result/result.component";

export default{
  title: 'Result',
  component: ResultComponent,
} as Meta

const Template: Story<ResultComponent> = (args: ResultComponent) => ({
  component: ResultComponent,
  props: args,
});

export const Success = Template.bind({});
Success.args = {
  success: true,

};

export const Info = Template.bind({});
Info.args = {
  info: true,

};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,

};

export const Erorr = Template.bind({});
Erorr.args = {
  error: true,

};
