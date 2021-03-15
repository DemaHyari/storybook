import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})

export class DateComponent {
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

