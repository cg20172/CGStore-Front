import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  public goToQuotation() {
    this.router.navigateByUrl('quotation');
  }

  public goToRegister() {
    this.router.navigateByUrl('auth/register');
  }

  public goToContact() {
    this.router.navigateByUrl('contact');
  }

}
