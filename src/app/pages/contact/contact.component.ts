import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private lat: number = 51.678418;
  private lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
