import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})

export class TextareaComponent{
  @Input()
  label = false;

  @Input()
  labelText = 'Label';

  @Input()
  message = false;

  @Input()
  valid = false;

  @Input()
  messageText = 'Input caption message';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  public get Message(): string[]{
    let mode = '';
    if(this.message){
      mode = 'visibility ';
      if(this.valid){
        mode += ' valid';
      }else{
        mode += ' invalid';
      }
    }else{
      mode = 'hidden';
    }
    return [ mode ]
  }

  public get classes(): string[]{
    return [ this.size  ]
  }
}
