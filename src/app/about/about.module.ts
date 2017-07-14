import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { AboutRoutes } from './about.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AboutRoutes)
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
