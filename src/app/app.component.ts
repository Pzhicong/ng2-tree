import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
// import { TreeModel, NodeEvent } from 'ng2-tree';
import * as TreeTypes from './components/ng2-tree/tree.types';
import { NodeEvent } from './components/ng2-tree/tree.events';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<tree [tree]="tree" (nodeSelected)="logEvent($event)"></tree>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public tree: TreeTypes.TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        id: '123',
        children: [
          { value: 'Java' },
          { value: 'C++' },
          {
            value: 'C#', children: [
              { value: 'JavaScript' },
              { value: 'CoffeeScript' },
              {
                value: 'Lua',
                children: [
                  { value: 'JavaScript' },
                  { value: 'CoffeeScript' },
                  { value: 'Lua' }
                ]
              }
            ]
          }
        ]
      },
      {
        value: 'Prototype-based programming',
        children: [
          { value: 'JavaScript' },
          { value: 'CoffeeScript' },
          { value: 'Lua' }
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
  public logEvent(e: NodeEvent): void {
    console.log(e);
  }
}
