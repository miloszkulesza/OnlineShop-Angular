import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  template: `<img class='loading-spinner' src='assets/images/icons/spinner.gif' />`,
  styles: []
})

export class LoadingSpinnerComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
}
