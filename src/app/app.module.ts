import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TimelineComponent} from './timeline/timeline.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
