import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { LetsImagineComponent } from './components/lets-imagine/lets-imagine.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'lets-imagine', component: LetsImagineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
