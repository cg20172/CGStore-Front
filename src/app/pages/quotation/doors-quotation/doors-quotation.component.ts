import { Component, OnInit } from '@angular/core';

import { PuertaRapida } from './PuertaRapida.interface';

@Component({
  selector: 'app-doors-quotation',
  templateUrl: './doors-quotation.component.html',
  styleUrls: ['./doors-quotation.component.css']
})
export class DoorsQuotationComponent implements OnInit {

  public puertaRapida: PuertaRapida;

  constructor() { }

  ngOnInit() {
    this.puertaRapida = {
      color: null,
      height: null,
      width: null

    }
  }

  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };

  data: any = {
    email: 'muk@gmail.com'
  };

  isCompleted: boolean = false;

  onStep1Next(event) {
    console.log('Step1 - Next');
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
  }

  onStep3Next(event) {
    console.log('Step3 - Next');
  }

  onComplete(event) {
    this.isCompleted = true;
  }

  onStepChanged(step) {
    console.log('Changed to ' + step.title);
  }



  public colors = [
    { value: 1, display: 'Blanco' },
    { value: 2, display: 'Negro' },
    { value: 3 , display: 'Rojo' }
  ]

}