import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NMViewerModule } from './nmViewer/nmViewer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NMViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
