import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input()
  rightIcon= false;

  @Input()
  leftIcon= false;

  @Input()
  closeText= false;

  @Input()
  outline= false;

  //Types
  @Input()
  info= false;

  @Input()
  warning= false;

  @Input()
  error= false;

  @Input()
  success= false;

  public get classes(): string[] {
    let mode = this.outline ? 'outline' : '';
    if(this.info){
      mode += ' info';
    }else if(this.warning){
      mode += ' warning';
    }else if(this.error){
      mode += ' error';
    }else if(this.success){
      mode += ' success';
    }
    return ['alert', mode];
  }
}
