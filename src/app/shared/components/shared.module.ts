import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ FooterComponent, CardComponent ],
  imports: [ CommonModule, MatCardModule ],
  exports: [ FooterComponent, CardComponent ]
})
export class SharedModule { }
