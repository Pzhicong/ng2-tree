import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<tree [tree]="tree"></tree>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [
          {value: 'Java'},
          {value: 'C++'},
          {value: 'C#'}
        ]
      },
      {
        value: 'Prototype-based programming',
        children: [
          {value: 'JavaScript'},
          {value: 'CoffeeScript'},
          {value: 'Lua'}
        ]
      }
    ]
  };
  private date: Date = new Date();
  private sex: string = 'male';

  public alertType: string = 'success';
  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.debug('app-component初始化');
  }

  public receive(object) {
    console.log(object);
  }
}
