import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent{
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

  public get Label(): string[]{
    let mode = '';
    if(this.label){
      mode = 'visibility';
    }else{
      mode = 'hidden';
    }
    return [ mode ]
  }

  public get classes(): string[]{

    return [ this.size  ]
  }
}
