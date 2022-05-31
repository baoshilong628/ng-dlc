import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DlcButtonComponent} from "./button.component";

@NgModule({
  declarations:[DlcButtonComponent],
  exports:[DlcButtonComponent],
  imports:[CommonModule]
})
export class DlcButtonModule {}
