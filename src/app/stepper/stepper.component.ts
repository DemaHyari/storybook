import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent{
  @Input()
  icon = false;

  @Input()
  arrow = false;

  @Input()
  vertical = false;

  @Input()
  verticalArrow = false;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  value: number = 0;

  public get Icon(): string[]{
    let mode = '';
    if(this.icon){
      mode = 'visibility';
    }else{
      mode = 'hidden';
    }
    return [ mode ]
  }
  public get Arrow(): string[]{
    let mode = '';
    if(this.arrow){
      mode = 'visibility ';
    }else{
      mode = 'hidden';
    }
    return [ mode ]
  }
  public get  VerticalArrow(): string[]{
    let mode = '';
    if(this.verticalArrow){
      mode = 'visibility ';
    }else{
      mode = 'hidden';
    }
    return [ mode ]
  }
  public get classes(): string[]{
    let mode = '';
    if(this.vertical){
      mode = 'vertical ';
    }else{
      mode = 'horizontal';
    }
    return [ this.size , mode ]
  }
  plus(){
    let num  = parseInt((<HTMLInputElement>document.getElementById("no")).value);
    if(num >= 30){
      this.value = num;
    }else{
      this.value = num + 1;
    }
  }
  minus(){
    let num  = parseInt((<HTMLInputElement>document.getElementById("no")).value);
    if(0 >= num){
      this.value = num;
    }else{
      this.value = num - 1;
    }
  }
}
