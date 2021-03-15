import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ExtendedButtonComponent } from './extended-button/extended-button.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';
import { TextButtonComponent } from './text-button/text-button.component';
import { RightIconButtonComponent } from './right-icon-button/right-icon-button.component';
import { LeftIconButtonComponent } from './left-icon-button/left-icon-button.component';
import { PaginationComponent } from './pagination/pagination.component';
import { GroupPaginationComponent } from './group-pagination/group-pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { MenuBarItemComponent } from './menu-bar-item/menu-bar-item.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { TextareaComponent } from './textarea/textarea.component';
import { DateComponent } from './date/date.component';
import { StepperComponent } from './stepper/stepper.component';
import { ChipsComponent } from './chips/chips.component';
import { RateComponent } from './rate/rate.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';
import { InputComponent } from './input/input.component';
import { TimeComponent } from './time/time.component';
import { FacialRateComponent } from './facial-rate/facial-rate.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AlertComponent } from './alert/alert.component';
import { MessageComponent } from './message/message.component';
import { NotificationComponent } from './notification/notification.component';
import { ModelComponent } from './model/model.component';
import { ResultComponent } from './result/result.component';
import { GlobalBannersComponent } from './global-banners/global-banners.component';
import { GlobalBannersAlertComponent } from './global-banners-alert/global-banners-alert.component';
import { PopConfirmComponent } from './pop-confirm/pop-confirm.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { BadgesComponent } from './badges/badges.component';
import { AvatarComponent } from './avatar/avatar.component';
import { CounterComponent } from './counter/counter.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonGroupComponent,
    ExtendedButtonComponent,
    ButtonIconComponent,
    DropdownButtonComponent,
    TextButtonComponent,
    RightIconButtonComponent,
    LeftIconButtonComponent,
    PaginationComponent,
    GroupPaginationComponent,
    AppTopbarComponent,
    MenuBarItemComponent,
    BreadcrumbComponent,
    CheckboxComponent,
    RadioButtonComponent,
    SelectButtonComponent,
    TextareaComponent,
    DateComponent,
    StepperComponent,
    ChipsComponent,
    RateComponent,
    SwitchButtonComponent,
    InputComponent,
    TimeComponent,
    FacialRateComponent,
    PageHeaderComponent,
    AlertComponent,
    MessageComponent,
    NotificationComponent,
    ModelComponent,
    ResultComponent,
    GlobalBannersComponent,
    GlobalBannersAlertComponent,
    PopConfirmComponent,
    TooltipComponent,
    BadgesComponent,
    AvatarComponent,
    CounterComponent,
    PopoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
