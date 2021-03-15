import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent implements OnInit {
  @Input()
  primary = false;

  @Input()
  primaryOutline = false;

  @Input()
  danger = false;

  @Input()
  dangerOutline  = false;

  @Input()
  outline = false;

  @Input()
  dashed = false;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  backgroundColor?: string;

  @Input()
  label = 'Label';

  public get classes(): string[]{
    let mode = '';
    if(this.primary){
      mode = 'primary-button';
    }else if(this.primaryOutline){
      mode = 'primaryOutline-button';
    }else if(this.danger){
      mode = 'danger-button';
    }else if(this.dangerOutline){
      mode = 'dangerOutline-button';
    }else if(this.outline){
      mode = 'outline-button';
    }else if(this.dashed){
      mode = 'dashed-button';
    }
    return ['button', `button-${this.size}`, mode ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
