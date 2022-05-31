import {Component} from "@angular/core";

@Component({
  selector: 'dlc-button',
  exportAs: 'dlcButton',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['style/index.scss'],
  host:{
    class: 'dlc-btn'
  }
})
export class DlcButtonComponent {
}
