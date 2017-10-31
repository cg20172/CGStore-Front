import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSliderModule } from '@angular/material';
import { OwlModule } from 'ng2-owl-carousel';
import { MatRadioModule } from '@angular/material';

import { QuotationModule } from './quotation/quotation.module';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DoorsComponent } from './products/doors/doors.component';
import { MachineryComponent } from './products/machinery/machinery.component';
import { LegosComponent } from './products/legos/legos.component';

import { HeroDetailComponent } from './products/doors/hero-detail.component';
import { HeroListComponent } from './products/doors/hero-list.component';

import { HeroService } from './products/doors/hero.service';

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
    QuotationModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJgE_ZRBAXSFQb-ilbeU7OSqo74wUKUdk'
    }),
  ],
  declarations: [
    HomeComponent, ContactComponent, DoorsComponent, MachineryComponent, LegosComponent,
    HeroDetailComponent, // <-- #3 declare app component
    HeroListComponent
  ],
  exports: [
    HomeComponent, ContactComponent, DoorsComponent, MachineryComponent, LegosComponent,
    HeroDetailComponent,
    HeroListComponent,

  ],
  providers: [HeroService]
})

export class PagesModule { }
