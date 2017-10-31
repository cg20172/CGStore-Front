import { Component, ViewEncapsulation, OnInit } from '@angular/core';



@Component({
  selector: 'app-legos',
  templateUrl: './legos.component.html',
  styleUrls: ['./legos.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,

})
export class LegosComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }
}

export class SliderConfigurableExample {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
}
