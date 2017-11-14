import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public lat: number = 4.639177;
  public lng: number = -74.082097;

  constructor() { }

  ngOnInit() {
  }

}
