import { Meta, Story } from "@storybook/angular/types-6-0";
import { MenuBarItemComponent } from "src/app/menu-bar-item/menu-bar-item.component";

export default{
  title: 'Menu Bar Item',
  component: MenuBarItemComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<MenuBarItemComponent> = (args: MenuBarItemComponent) => ({
  component: MenuBarItemComponent,
  props: args,
});

export const  Normal = Template.bind({});
Normal.args = {
  label: 'Primary Menu Item',
  primaryItem: true
};

export const  ActiveNormal = Template.bind({});
ActiveNormal.args = {
  label: 'Primary Menu Item',
  primaryItem: true,
  active: true
};

export const  Collapsed = Template.bind({});
Collapsed.args = {
  label: 'Menu Item',
  primaryItem: true,
  collapsed: true
};

export const  Uncollapsed = Template.bind({});
Uncollapsed.args = {
  label: 'Menu Item',
  primaryItem: true,
  uncollapsed: true
};

export const  SubItem = Template.bind({});
SubItem.args = {
  label: 'Sub Item',
  subItem: true
};
