import { Meta, Story } from "@storybook/angular/types-6-0";
import { AppTopbarComponent } from "src/app/app-topbar/app-topbar.component";

export default{
  title: 'Application TopBar',
  component: AppTopbarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<AppTopbarComponent> = (args: AppTopbarComponent) => ({
  component: AppTopbarComponent,
  props: args,
});

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  searchIcon: true,
};

export const SearchInput = Template.bind({});
SearchInput.args = {
  searchInput: true,
};

export const Logo = Template.bind({});
Logo.args = {
  searchIcon: true,
  logo: true
};
