import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input()
  status = false;

  @Input()
  presence = false;

  @Input()
  ellipse = false;

  @Input()
  label = 'MS';

  @Input()
  size: 'mini' | 'small' | 'medium' | 'large' | 'custom' = 'large';

  //Types
  @Input()
  image = false;

  @Input()
  text = false;

  @Input()
  project = false;

  //Identifier
  @Input()
  check = false;

  @Input()
  close = false;

  @Input()
  more = false;
  
  public get classes(): string[] {
    let mode = ''; /*
    if(this.status){
      mode = 'status';
    }*/
    return ['avatar', this.size, mode];
  }

  public get Ellipse(): string[] {
    let mode = '';
    if (this.ellipse) {
      mode = 'ellipse';
    }
    return [mode , this.size];
  }

  public get Status(): string[] {
    let mode = '';
    if (this.status) {
      mode = 'status';
      if (this.check) {
        mode += ' check';
      } else if (this.close) {
        mode += ' close';
      } else if (this.more) {
        mode += ' more';
      }
    }

    return [mode];
  }

  public get Presence(): string[] {
    let mode = '';
    if(this.image){
      if (this.presence) {
        mode = 'presence';
        if (this.ellipse) {
          mode += ' ellipseImage';
        } else {
          mode += ' squareImage';
        }
      }
    }
    if(this.text){
      if (this.presence) {
        mode = 'presence';
        if (this.ellipse) {
          mode += ' ellipseText';
        } else {
          mode += ' squareText';
        }
      }
    }
    return [mode];
  }
}
