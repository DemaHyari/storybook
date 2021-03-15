import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input()
  label = 'This is Prompt Message';

  //Types
  @Input()
  info = false;

  @Input()
  warning = false;

  @Input()
  error = false;

  @Input()
  success = false;

  @Input()
  loading = false;

}
