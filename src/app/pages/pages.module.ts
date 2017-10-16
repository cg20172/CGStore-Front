import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DoorsComponent } from './products/doors/doors.component';
import { MachineryComponent } from './products/machinery/machinery.component';
import { LegosComponent } from './products/legos/legos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, ContactComponent, DoorsComponent, MachineryComponent, LegosComponent],
  exports: [HomeComponent, ContactComponent, DoorsComponent, MachineryComponent, LegosComponent]
})

export class PagesModule { }
