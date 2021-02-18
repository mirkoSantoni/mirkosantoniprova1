import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { VisImgComponent } from "./VisualImg/VisImg.component";
import { InputDatiComponent } from './input-dati/input-dati.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, VisImgComponent, InputDatiComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
