import { Meta, Story } from "@storybook/angular/types-6-0";
import { ModelComponent } from "src/app/model/model.component";

export default{
  title: 'Model',
  component: ModelComponent,
} as Meta

const Template: Story<ModelComponent> = (args: ModelComponent) => ({
  component: ModelComponent,
  props: args,
});

export const BasicInformation = Template.bind({});
BasicInformation.args = {
  information: true
};

export const InfoInformation = Template.bind({});
InfoInformation.args = {
  information: true,
  info: true,
  title: 'Information Title',
  icon:true,
};

export const ErrorInformation = Template.bind({});
ErrorInformation.args = {
  information: true,
  error: true,
  title: 'Error or Delete Title',
  icon:true,
};

export const WarningInformation = Template.bind({});
WarningInformation.args = {
  information: true,
  warning: true,
  title: 'Warning Title',
  icon:true,
};

export const SuccessInformation = Template.bind({});
SuccessInformation.args = {
  information: true,
  success: true,
  title: 'Success Title',
  icon:true,
};
export const InfoInformationWithoutIcon = Template.bind({});
InfoInformationWithoutIcon.args = {
  information: true,
  info: true,
  title: 'Information Title',
};

export const ErrorInformationWithoutIcon = Template.bind({});
ErrorInformationWithoutIcon.args = {
  information: true,
  error: true,
  title: 'Error or Delete Title',
};

export const WarningInformationWithoutIcon = Template.bind({});
WarningInformationWithoutIcon.args = {
  information: true,
  warning: true,
  title: 'Warning Title',
};

export const SuccessInformationWithoutIcon = Template.bind({});
SuccessInformationWithoutIcon.args = {
  information: true,
  success: true,
  title: 'Success Title',
};

//Confermation
export const BasicConfermation = Template.bind({});
BasicConfermation.args = {
  information: false
};

export const InfoConfermation = Template.bind({});
InfoConfermation.args = {
  information: true,
  info: true,
  title: 'Information Title',
  icon:true,
};

export const ErrorConfermation = Template.bind({});
ErrorConfermation.args = {
  information: false,
  error: true,
  title: 'Error or Delete Title',
  icon:true,
};

export const WarningConfermation = Template.bind({});
WarningConfermation.args = {
  information: false,
  warning: true,
  title: 'Warning Title',
  icon:true,
};

export const SuccessConfermation = Template.bind({});
SuccessConfermation.args = {
  information: false,
  success: true,
  title: 'Success Title',
  icon:true,
};
export const InfoConfermationWithoutIcon = Template.bind({});
InfoConfermationWithoutIcon.args = {
  information: false,
  info: true,
  title: 'Information Title',
};

export const ErrorConfermationWithoutIcon = Template.bind({});
ErrorConfermationWithoutIcon.args = {
  information: false,
  error: true,
  title: 'Error or Delete Title',
};

export const WarningConfermationWithoutIcon = Template.bind({});
WarningConfermationWithoutIcon.args = {
  information: false,
  warning: true,
  title: 'Warning Title',
};

export const SuccessConfermationWithoutIcon = Template.bind({});
SuccessConfermationWithoutIcon.args = {
  information: false,
  success: true,
  title: 'Success Title',
};
