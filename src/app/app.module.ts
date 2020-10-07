import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LetsImagineComponent } from './components/lets-imagine/lets-imagine.component';
import { CareerPathComponent } from './components/career-path/career-path.component';
import { TriforceComponent } from './components/triforce/triforce.component';
import { ValuesComponent } from './components/values/values.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    LetsImagineComponent,
    CareerPathComponent,
    TriforceComponent,
    ValuesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
