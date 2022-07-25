import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NMViewerComponent } from './nmViewer.component';
import { NavComponent } from './protocolDetails/leftNavigation/navigation.component';
import { MiddleSectionomponent } from './protocolDetails/middleSection/middleSection.component';

@NgModule({
  declarations: [
    NMViewerComponent,
    NavComponent,
    MiddleSectionomponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NMViewerComponent],
})
export class NMViewerModule { }
