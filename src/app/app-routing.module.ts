import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { LetsImagineComponent } from './components/lets-imagine/lets-imagine.component';
import { CareerPathComponent } from './components/career-path/career-path.component';
import { TriforceComponent } from './components/triforce/triforce.component';
import { ValuesComponent } from './components/values/values.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'lets-imagine', component: LetsImagineComponent },
  { path: 'career-path', component: CareerPathComponent },
  { path: 'triforce', component: TriforceComponent },
  { path: 'values', component: ValuesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
