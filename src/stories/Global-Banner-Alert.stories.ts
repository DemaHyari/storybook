import { Meta, Story } from "@storybook/angular/types-6-0";
import { GlobalBannersAlertComponent } from "src/app/global-banners-alert/global-banners-alert.component";

export default{
  title: 'Global Banners Alert',
  component: GlobalBannersAlertComponent,
} as Meta

const Template: Story<GlobalBannersAlertComponent> = (args: GlobalBannersAlertComponent) => ({
  component: GlobalBannersAlertComponent,
  props: args,
});
export const BasicChange = Template.bind({});
BasicChange.args = {
  change: true,
  closeIcon: true,
};
export const IconChange = Template.bind({});
IconChange.args = {
  change: true,
  closeIcon: false,
  icon: true
};
export const Change = Template.bind({});
Change.args = {
  change: true,
  closeIcon: true,
  icon: true
};

export const Success = Template.bind({});
Success.args = {
  success: true,
  closeIcon: true,
  icon: true
};

export const Info = Template.bind({});
Info.args = {
  info: true,
  closeIcon: true,
  icon: true
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  closeIcon: true,
  icon: true
};

export const Erorr = Template.bind({});
Erorr.args = {
  error: true,
  closeIcon: true,
  icon: true
};

