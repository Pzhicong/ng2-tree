import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-first-nav',
  templateUrl: './first-nav.component.html',
  styleUrls: ['./first-nav.component.css']
})
export class FirstNavComponent implements OnInit {

  @Input() public dataInput: Object = '';
  
  constructor() { }

  ngOnInit() {
  }

}
