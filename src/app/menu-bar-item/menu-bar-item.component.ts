import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-item',
  templateUrl: './menu-bar-item.component.html',
  styleUrls: ['./menu-bar-item.component.scss']
})
export class MenuBarItemComponent{
  @Input()
  label = 'Label';

  @Input()
  primaryItem = false;

  @Input()
  subItem = false;

  @Input()
  active = false;

  @Input()
  collapsed = false;

  @Input()
  uncollapsed = false;

  public get PrimaryItem(): string[]{
    let mode = '';

    if(this.primaryItem){
      mode = 'visibility';
    }else{
      mode = 'hidden';
    }
    return [ mode ];
  }

  public get SubItem(): string[]{
    let mode = '';

    if(this.subItem){
      mode = 'visibility';
    }else{
      mode = 'hidden';
    }
    return [ mode ];
  }

  public get Collapsed(): string[]{
    let mode = '';
    if(this.collapsed){
      mode = 'visibility';
    }else{
      mode = 'hidden';
    }
    return [ mode ];
  }

  public get Uncollapsed(): string[]{
    let mode = '';

    if(this.uncollapsed){
      mode = 'visibility';
    }else{
      mode = 'hidden';
    }
    return [ mode ];
  }

  public get Active(): string[]{
    let mode = '';

    if(this.active){
      mode = 'active';
    }
    return [ mode ];
  }

}
