import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { LandingModule } from './landing/landing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    LandingModule,
    AdminModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
