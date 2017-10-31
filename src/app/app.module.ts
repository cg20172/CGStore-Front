import { NgModule } from '@angular/core';
import { OwlModule } from 'ng2-owl-carousel';
import { Logger } from "angular2-logger/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpModule, RequestOptions, Headers } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

import { AuthService } from './services/auth.service';
import { ConnectionService } from './services/connection.service';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    OwlModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    SimpleNotificationsModule.forRoot(),
    NgbModule.forRoot(),

    AppRoutingModule,
    HttpModule,
    AuthModule,
    PagesModule,
    AdminModule
  ],
  providers: [
    ConnectionService,
    Logger,
    AuthService,
    ProductService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
