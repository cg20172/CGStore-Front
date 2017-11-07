import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSliderModule } from '@angular/material';
import { OwlModule } from 'ng2-owl-carousel';
import { MatRadioModule } from '@angular/material';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DoorsComponent } from './products/doors/doors.component';
import { MachineryComponent } from './products/machinery/machinery.component';
import { LegosComponent } from './products/legos/legos.component';


import { QuotationComponent } from './quotation/quotation.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatRadioModule,
    OwlModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJgE_ZRBAXSFQb-ilbeU7OSqo74wUKUdk'
    }),
  ],
  declarations: [
    HomeComponent, ContactComponent, DoorsComponent, MachineryComponent, LegosComponent,QuotationComponent
  ],
  exports: [
    HomeComponent, ContactComponent, DoorsComponent, MachineryComponent, LegosComponent
  ]
})

export class PagesModule { }
