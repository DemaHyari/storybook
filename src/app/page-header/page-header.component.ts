import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input()
  label = 'Breadcrumb Link';

  @Input()
  breadcrumb = false;

  @Input()
  title = false;
}
