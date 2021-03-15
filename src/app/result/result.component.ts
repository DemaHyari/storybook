import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input()
  label = 'Label';

  @Input()
  header = 'Lorem Ipsum is simply dummy text of the printing and typesetting';

  @Input()
  caption = 'Lorem Ipsum is simply dummy text of the printing and typesetting';
  
  //Icons Type
  @Input()
  info = false;

  @Input()
  warning = false;

  @Input()
  error = false;

  @Input()
  success = false;

}
