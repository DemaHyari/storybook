import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-global-banners',
  templateUrl: './global-banners.component.html',
  styleUrls: ['./global-banners.component.scss']
})

export class GlobalBannersComponent {
  @Input()
  label = 'Global Banners';

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

  public get classes(): string[] {
    let mode = '';
    if(this.info){
      mode += ' info';
    }else if(this.warning){
      mode += ' warning';
    }else if(this.error){
      mode += ' error';
    }else if(this.success){
      mode += ' success';
    }
    return [mode];
  }
}
