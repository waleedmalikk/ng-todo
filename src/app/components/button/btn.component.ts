import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
  @Input() bgColor:any;
  @Input() text:any;
  @Output() closeClicked = new EventEmitter();

  handleClose(){
    this.closeClicked.emit();
  }
}
