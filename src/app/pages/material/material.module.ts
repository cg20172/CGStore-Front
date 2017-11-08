import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatStepperModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
