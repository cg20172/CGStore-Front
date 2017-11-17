import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatSlideToggleModule, MatStepperModule, MatIconModule, MatButtonModule, MatTabsModule, MatExpansionModule } from '@angular/material';

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
    MatCheckboxModule
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
    MatCheckboxModule
  ]
})
export class MaterialModule { }
