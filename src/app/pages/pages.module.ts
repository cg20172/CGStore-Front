import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';
import { YagaModule } from '@yaga/leaflet-ng2';

import { MaterialModule } from './material/material.module';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DoorsComponent } from './products/doors/doors.component';
import { MachineryComponent } from './products/machinery/machinery.component';
import { LegosComponent } from './products/legos/legos.component';

import { QuotationComponent } from './quotation/quotation.component';
import { QuotationFormComponent } from './quotation/quotation-form/quotation-form.component';
import { DrawDoorComponent } from './quotation/draw-door/draw-door.component';
import { DrawLegoComponent } from './quotation/draw-lego/draw-lego.component';
import { DrawMuelleComponent } from './quotation/draw-muelle/draw-muelle.component';
import { DrawAbrigoComponent } from './quotation/draw-abrigo/draw-abrigo.component';
import { NgvasModule, tweens, hitAreas } from "ngvas";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    OwlModule,
    NgvasModule,
    YagaModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJgE_ZRBAXSFQb-ilbeU7OSqo74wUKUdk'
    }),
  ],
  declarations: [HomeComponent, ContactComponent, DoorsComponent, MachineryComponent, LegosComponent, QuotationComponent, QuotationFormComponent, DrawDoorComponent, DrawLegoComponent, DrawAbrigoComponent, DrawMuelleComponent],
  exports: [HomeComponent, ContactComponent, DoorsComponent, MachineryComponent, LegosComponent, QuotationComponent, QuotationFormComponent],
  providers: []
})

export class PagesModule { }
