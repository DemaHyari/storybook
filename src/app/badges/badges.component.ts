import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {
  @Input()
  icon = false;

  @Input()
  proccess = false;

  @Input()
  success = false;

  @Input()
  warning = false;

  @Input()
  error = false;

  @Input()
  disabled = false;

  @Input()
  label = 'Status';

  @Input()
  size: 'small' | 'large' = 'large';

  public get classes(): string[] {
    let mode = '';
    if(this.proccess){
      mode = 'proccess';
    }else if(this.success){
      mode = 'success';
    }else if(this.warning){
      mode = 'warning';
    }else if(this.error){
      mode = 'error';
    }else if(this.disabled){
      mode = 'disabled';
    }
    return ['badges',this.size, mode];
  }
}
