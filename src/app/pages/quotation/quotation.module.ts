import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { QuotationComponent } from './quotation.component';
import { DoorsQuotationComponent } from './doors-quotation/doors-quotation.component';
import { LegosQuotationComponent } from './legos-quotation/legos-quotation.component';
import { MachineryQuotationComponent } from './machinery-quotation/machinery-quotation.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    MatRadioModule
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
