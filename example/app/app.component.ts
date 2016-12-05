import {Component} from '@angular/core';
import {NgSpinningPreloaderService} from 'ng2-spinning-preloader';

@Component({
  selector: 'app',
  template: 'App component'
})

export class AppComponent {
  constructor(private ngSpinningPreloaderService: NgSpinningPreloaderService) {

  }
}


