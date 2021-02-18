import { Component, VERSION } from "@angular/core";

@Component({
  selector: "app-VisImg",
  templateUrl: "./VisImg.component.html",
  styleUrls: ["./VisImg.component.css"]
})
export class VisImgComponent {
  nomeSocieta: String;
  articolo: String;
  percorso: String;
  stile: String;
  scelta: boolean;
  numero: number;

  constructor() {
    this.numero = 0;
    this.scelta = false;
    this.btnCliccato();
    this.stile = "width:80%; border-style:solid";
  }

  btnCliccato() {
    if (this.scelta) {
      this.nomeSocieta = "Lamborghini";
      this.articolo = "della ";
      this.percorso =
        "https://github.com/mirkoSantoni/image4BI/blob/main/lamborghini.jpg?raw=true";
    } else {
      this.nomeSocieta = "Maserati";
      this.articolo = "della ";
      this.percorso =
        "https://github.com/mirkoSantoni/image4BI/blob/main/maserati.jpg?raw=true";
    }
    this.scelta = !this.scelta;
    this.numero++;
  }
}
