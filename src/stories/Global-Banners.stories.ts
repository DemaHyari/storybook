import { Meta, Story } from "@storybook/angular/types-6-0";
import { GlobalBannersComponent } from "src/app/global-banners/global-banners.component";

export default{
  title: 'Global Banners',
  component: GlobalBannersComponent,
} as Meta

const Template: Story<GlobalBannersComponent> = (args: GlobalBannersComponent) => ({
  component: GlobalBannersComponent,
  props: args,
});
export const Default = Template.bind({});
Default.args = {
  default: true,
};

export const Success = Template.bind({});
Success.args = {
  success: true,
  label: 'This is a Success',
};

export const Info = Template.bind({});
Info.args = {
  info: true,
  label: 'This is a Info',
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  label: 'This is a warning',
};

export const Erorr = Template.bind({});
Erorr.args = {
  error: true,
  label: 'This is a Erorr',
};
