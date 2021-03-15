import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-pagination',
  templateUrl: './group-pagination.component.html',
  styleUrls: ['./group-pagination.component.scss']
})
export class GroupPaginationComponent{
  @Input()
  active = false;

  @Input()
  label = '55';
  public get classes(): string[] {
    const mode = this.active ? 'active' : '';
    return [mode];
  }
}
