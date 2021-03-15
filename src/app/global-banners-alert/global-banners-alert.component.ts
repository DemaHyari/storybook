import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-global-banners-alert',
  templateUrl: './global-banners-alert.component.html',
  styleUrls: ['./global-banners-alert.component.scss']
})
export class GlobalBannersAlertComponent {
  @Input()
  label = 'Basic Alret';

  @Input()
  msgCaption = 'Basic Alert Content goes here and here and here and here and here and here and here and here'

  @Input()
  closeIcon = false;

  @Input()
  icon = false;
  
  //Icons Type
  @Input()
  default = false;

  @Input()
  info = false;

  @Input()
  warning = false;

  @Input()
  error = false;

  @Input()
  success = false;

  @Input()
  change = false;

  public get classes(): string[] {
    let mode = '';
    if (this.info) {
      mode += ' info';
    } else if (this.warning) {
      mode += ' warning';
    } else if (this.error) {
      mode += ' error';
    } else if (this.success) {
      mode += ' success';
    } else if (this.change) {
      mode += ' change';
    }
    return [mode];
  }
}
