import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `<div class=loading-container>
              <div class="content">
                <div class="img-div">
                  <img [src]='"/assets/components/images/" + pictrue'>
                </div>
                <div class="tip-text" *ngIf="showTip">
                  {{loadingText}}
                </div>
              </div>
              <div class="mask" *ngIf="showMask"></div>
            </div>`,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loadingText: String = '加载中';
  pictrue: String = 'loading.gif';
  showMask: Boolean = true;
  showTip: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
