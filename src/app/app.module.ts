import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
// import {TreeModule} from './components/tree/tree';

import { LeftNavModule } from './left-nav/left-nav.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoggerService } from './logger.service';
import { HightlightDirective } from './hightlight.directive';
import { AlertComponent } from './components/alert/alert.component';
import { RouterModule, Routes } from '@angular/router';
import { SexformPipe } from './pipe/sexform.pipe';
// import { AboutComponent } from './about/about.component';

import {MdSliderModule} from "@angular2-material/slider";
import {MdCoreModule,OVERLAY_PROVIDERS,MdUniqueSelectionDispatcher} from "@angular2-material/core";
import {MdButtonModule} from "@angular2-material/button";
import {MdCardModule} from "@angular2-material/card";
import {MdRadioModule} from "@angular2-material/radio";
import {MdCheckboxModule} from "@angular2-material/checkbox";
import {MdTooltipModule} from "@angular2-material/tooltip";
import {MdIconModule,MdIconRegistry} from "@angular2-material/icon";
import { TreeModule } from './components/ng2-tree/tree.module';

import 'hammerjs';
import { LoadingComponent } from './components/loading/loading.component';

const appRoutes : Routes = [
  // {path: '', redirectTo:'home', pathMatch: 'full'},
  // {path:'home',component: LeftNavComponent},
  {path:'about',loadChildren: './about/about.module#AboutModule'}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HightlightDirective,
    AlertComponent,
    SexformPipe,
    LoadingComponent
    // LeftNavComponent
    // AboutComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    MdCoreModule,
    MdCardModule,
    MdButtonModule,
    MdRadioModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdSliderModule,
    MdIconModule,
    LeftNavModule,
    TreeModule,
    // AboutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggerService,OVERLAY_PROVIDERS,MdUniqueSelectionDispatcher,MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mdIconRegister:MdIconRegistry) {
    mdIconRegister.registerFontClassAlias('hotshots', 'ht')
  }
 }
