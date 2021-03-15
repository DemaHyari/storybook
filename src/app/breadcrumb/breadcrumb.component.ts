import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent{
  @Input()
  icon = false;

  @Input()
  link = false;

  @Input()
  primary = false;

  @Input()
  dropdown = false;

  @Input()
  label = 'Breadcrumb Link';

  @Input()
  active = false;

  @Input()
  size: 'small' | 'large' = 'small';

  public get Classes(): string[]{
    //let mode = '';
    return [ this.size ];
  }

}
