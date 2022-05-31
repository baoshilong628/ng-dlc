import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'dlc-switch',
  exportAs: 'dlcSwitch',
  template: `
    <span (click)="switch()" class="btn-outer" [class.on]="value">
      <div class="paddle"></div>
    </span>
  `,
  styleUrls: ['style/index.scss']
})
export class DlcSwitchComponent {
  @Input()
  public value:boolean = false
  @Output()
  public valueChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  switch() {
    this.value = ! this.value
    this.valueChange.emit(this.value)
  }
}
