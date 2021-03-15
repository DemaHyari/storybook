import { Meta, Story } from "@storybook/angular/types-6-0";
import { PageHeaderComponent } from "src/app/page-header/page-header.component";

export default{
  title: 'Page Header',
  component: PageHeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<PageHeaderComponent> = (args: PageHeaderComponent) => ({
  component: PageHeaderComponent,
  props: args,
});

export const Breadcrumb = Template.bind({});
Breadcrumb.args = {
  breadcrumb: true,
  title: false
};

export const Title = Template.bind({});
Title.args = {
  title: true,
  breadcrumb: false
};

export const FullPageHeader = Template.bind({});
FullPageHeader.args = {
  title: true,
  breadcrumb: true
};
