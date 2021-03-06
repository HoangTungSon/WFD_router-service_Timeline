import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from '../timeline/timeline.component';

const routes: Routes = [
  {
    path: `timelines`,
    component: TimelineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
