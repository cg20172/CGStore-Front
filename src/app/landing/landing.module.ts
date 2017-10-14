import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, PageComponent, LandingComponent],
  exports: [HeaderComponent, FooterComponent, PageComponent]
})
export class LandingModule { }
