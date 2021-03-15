import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent{
  @Input()
  label = false;

  @Input()
  labelText = 'Label';

  @Input()
  message = false;

  @Input()
  messageText = 'Input caption message';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';


  public get classes(): string[] {
    return [this.size]
  }
}
