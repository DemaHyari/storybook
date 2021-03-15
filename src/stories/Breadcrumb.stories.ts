import { Meta, Story } from "@storybook/angular/types-6-0";
import { BreadcrumbComponent } from "src/app/breadcrumb/breadcrumb.component";

export default{
  title: 'Breadcrumb',
  component: BreadcrumbComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<BreadcrumbComponent> = (args: BreadcrumbComponent) => ({
  component: BreadcrumbComponent,
  props: args,
});

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
  primary: true
};

export const Link = Template.bind({});
Link.args = {
  link: true,
  primary: true
};

export const LinkIcon = Template.bind({});
LinkIcon.args = {
  icon: true,
  link: true,
  primary: true
};

export const LinkIconActive = Template.bind({});
LinkIconActive.args = {
  icon: true,
  link: true,
  primary: true,
  active: true
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  link: true,
  primary: false,
  dropdown: true,
  active: true
};
