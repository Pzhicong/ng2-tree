import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  public items: Array<Object> = [
    {text: '权限模块',children:[
      {text:'组织架构',children:[
        {text:'测试列表1',link: 'user/usertable/page/1'},
        {text:'测试列表2',link: 'user/usertable/page/1'},
        {text:'测试列表3',link: 'user/usertable/page/1'}
      ]},
      {text:'用户列表',link: 'user/usertable/page/1'},
      {text:'角色列表',link: 'role/roletable/page/1'},
      {text:'权限列表',link: 'permission/permissiontable/page/1'}
    ]},
    {text: '内容模块',children:[
      {text:'文章管理',link: 'org/orgmng'},
      {text:'评论管理',link: 'user/usertable/page/1'}
    ]},
    {text: '系统监控',link:'sys/sysmonitor'}
  ];
  public array: Array<string> = ['1','2','3'];

  constructor() { }

  ngOnInit() {
  }

}
