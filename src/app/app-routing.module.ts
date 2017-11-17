import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Error Components
import { NotFoundComponent } from './errors/not-found/not-found.component';

// Landing Components
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DoorsComponent } from './pages/products/doors/doors.component';
import { MachineryComponent } from './pages/products/machinery/machinery.component';
import { LegosComponent } from './pages/products/legos/legos.component';

// Auth Components
import { LoginComponent } from './auth/login/login.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ProfileComponent } from './auth/profile/profile.component'

// Quotation Components
import { QuotationComponent } from './pages/quotation/quotation.component';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'products/doors', component: DoorsComponent },
  { path: 'products/machinery', component: MachineryComponent },
  { path: 'products/legos', component: LegosComponent },

  { path: 'quotation', component: QuotationComponent, canActivate: [AuthGuard] },

  { path: 'auth/forgot', component: ForgotComponent, canActivate: [GuestGuard] },
  { path: 'auth/login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'auth/register', component: RegisterComponent, canActivate: [GuestGuard] },
  { path: "auth/profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'auth/reset', component: ResetComponent, canActivate: [GuestGuard] },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, GuestGuard]
})

export class AppRoutingModule { }
