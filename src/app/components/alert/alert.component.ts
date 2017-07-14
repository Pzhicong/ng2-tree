import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() public type: string = '';
  @Input() public dismissible: boolean = false;
  @Input() public dismissOnTimeout: number | string;

 //对外开放的事件
  @Output() public onClosed: EventEmitter<AlertComponent> = new EventEmitter<AlertComponent>();
  public isClosed: boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.dismissOnTimeout){
      setTimeout(() => this.close(),parseInt(this.dismissOnTimeout as string,10));
    }
  }

  public close(): void{
    if(this.isClosed){
      return;
    }
    this.onClosed.emit(this);
    this.isClosed = true;
  }

}
