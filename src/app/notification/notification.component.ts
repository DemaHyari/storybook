import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input()
  title = 'Notification Title';

  @Input()
  content = `This is the content of the notification,
    This is the content of the notification,
    This is the content of the notification.`

  //Types
  @Input()
  icon = false;

  @Input()
  button = false;

  //Icons Type
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
    return ['notification', mode];
  }
}
