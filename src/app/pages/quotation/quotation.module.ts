import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuotationComponent } from './quotation.component';
import { DoorsQuotationComponent } from './doors-quotation/doors-quotation.component';
import { LegosQuotationComponent } from './legos-quotation/legos-quotation.component';
import { MachineryQuotationComponent } from './machinery-quotation/machinery-quotation.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormWizardModule } from 'angular2-wizard';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    BrowserModule,
    FormsModule,
    FormWizardModule
  ],
  declarations: [
    QuotationComponent,
    DoorsQuotationComponent,
    LegosQuotationComponent,
    MachineryQuotationComponent
  ],
  exports: [QuotationComponent, DoorsQuotationComponent, LegosQuotationComponent, MachineryQuotationComponent],
  bootstrap: [QuotationComponent]
})

export class QuotationModule { }
