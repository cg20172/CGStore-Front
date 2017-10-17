import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
 

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DoorsComponent } from './products/doors/doors.component';
import { MachineryComponent } from './products/machinery/machinery.component';
import { LegosComponent } from './products/legos/legos.component';

import { HeroDetailComponent } from './products/doors/hero-detail.component'; // <-- #1 import component
import { HeroListComponent }   from './products/doors/hero-list.component';

import { HeroService }         from './products/doors/hero.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  declarations: [
  	HomeComponent, ContactComponent, DoorsComponent, MachineryComponent, LegosComponent,
  	HeroDetailComponent, // <-- #3 declare app component
    HeroListComponent
  ],
  exports: [
  	HomeComponent, ContactComponent, DoorsComponent, MachineryComponent, LegosComponent,
  	HeroDetailComponent,
    HeroListComponent
  ],
  providers: [ HeroService ]
})

export class PagesModule { }
