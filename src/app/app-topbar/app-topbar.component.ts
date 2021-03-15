import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.scss']
})
export class AppTopbarComponent implements OnInit {
  @Input()
  logo = false;
  
  @Input()
  username= 'Username';

  @Input()
  role= 'Role';

  @Input()
  searchIcon = false;

  @Input()
  searchInput  = false;

  public get SearchIcon(): string[]{
    let mode = '';
    if(this.searchIcon){
      mode = 'visibility';
    }else{
      mode = 'hidden';
    }
    return [ mode ];
  }

  public get SearchInput(): string[]{
    let mode = '';
    if(this.searchInput){
      mode = 'visibility';
    }else{
      mode = 'hidden';
    }
    return [ mode ];
  }
  constructor() {}

  ngOnInit(): void {
  }

}
