import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent{
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
