import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.css']
})
export class MachineryComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('hola') message: any;
  @ViewChild('img') imagen: any;
  ngOnInit() {



  }
  public goToQuotation() {
    this.router.navigateByUrl('quotation');
  }








}
