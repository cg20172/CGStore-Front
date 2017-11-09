import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';
//import { QuoteService } from './../../services/quote.service';

import { User } from './../../models/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private dataUser: User;
  constructor(private authService: AuthService/*, private quoteService: QuoteService*/) { }

  ngOnInit() {
    this.dataUser = this.authService.getUser();
    console.log(this.dataUser.lastName);
    console.log(this.dataUser.address);
  }




}