import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav.component';
import { FirstNavComponent } from './first-nav/first-nav.component';
import { SecondNavComponent } from './second-nav/second-nav.component';
import { ThirdNavComponent } from './third-nav/third-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  // declarations: [LeftNavComponent],
  declarations: [LeftNavComponent, FirstNavComponent, SecondNavComponent, ThirdNavComponent],
  exports: [LeftNavComponent]
})
export class LeftNavModule { }
