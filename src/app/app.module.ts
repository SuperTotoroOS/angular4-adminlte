import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';
import { MainHeaderComponent } from './layouts/full-layout/main-header/main-header.component';
import { MainSidebarComponent } from './layouts/full-layout/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './layouts/full-layout/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './layouts/full-layout/main-footer/main-footer.component';
import { ControlSidebarComponent } from './layouts/full-layout/control-sidebar/control-sidebar.component';
import {MenuService} from "./service/menu.service";

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
