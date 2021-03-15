import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent{
  @Input()
  size:  'medium' = 'medium';

  @Input()
  label= false;
  /*
  public get classes(): string[]{
    //let mode = this.label ? ':before :after' : '';
    return [`${this.size}`]
  }*/
}
