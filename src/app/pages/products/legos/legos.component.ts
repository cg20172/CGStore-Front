import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-legos',
  templateUrl: './legos.component.html',
  styleUrls: ['./legos.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,

})
export class LegosComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {


  }
  public goToQuotation() {
    this.router.navigateByUrl('quotation');
  }
  public goToRegister() {
    this.router.navigateByUrl('auth/register');
  }


}
