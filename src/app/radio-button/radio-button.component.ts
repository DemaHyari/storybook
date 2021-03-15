import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  @Input()
  label = false;

  @Input()
  labelText = 'Label';
  
  public get Label(): string[]{
    let mode = '';
    if(this.label){
      mode = 'visibility';
    }else{
      mode = 'hidden';
    }
    return [ mode ];
  }
}
