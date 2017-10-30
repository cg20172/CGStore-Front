import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSliderModule } from '@angular/material';

import { QuotationModule } from './quotation/quotation.module';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DoorsComponent } from './products/doors/doors.component';
import { MachineryComponent } from './products/machinery/machinery.component';
import { LegosComponent } from './products/legos/legos.component';

import { HeroDetailComponent } from './products/doors/hero-detail.component'; // <-- #1 import component
import { HeroListComponent } from './products/doors/hero-list.component';

import { HeroService } from './products/doors/hero.service';


import { OwlModule } from 'ngx-owl-carousel';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule, // <-- #2 add to @NgModule imports
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    OwlModule,
    QuotationModule
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
