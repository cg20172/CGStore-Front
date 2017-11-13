import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatStepperModule, MatIconModule, MatButtonModule, MatTabsModule, MatExpansionModule } from '@angular/material';

import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule

  ],
  declarations: [],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule
  ]
})
export class MaterialModule { }
