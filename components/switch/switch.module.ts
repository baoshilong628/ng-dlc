import {NgModule} from "@angular/core";
import {DlcSwitchComponent} from "./switch.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [DlcSwitchComponent],
  exports: [DlcSwitchComponent],
  imports: [CommonModule]
})
export class DlcSwitchModule {}
