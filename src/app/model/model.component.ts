import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  @Input()
  title = 'Model Title';

  @Input()
  content = `This is placeholder text. The basic dialog for modals should contain only valuable and
    relevant information.Simplify dialogs by removing unnecessary elements or content that does not
    support user tasks. If you find that the number of required elements for your design is making
    the dialog excessively large, then try a different design solution. `

  @Input()
  label = 'Button Label';
  //Types
  @Input()
  icon = false;

  @Input()
  information = false;


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
      mode = ' info';
    }else if(this.warning){
      mode = ' warning';
    }else if(this.error){
      mode = ' error';
    }else if(this.success){
      mode = ' success';
    }
    return [ mode];
  }
}
