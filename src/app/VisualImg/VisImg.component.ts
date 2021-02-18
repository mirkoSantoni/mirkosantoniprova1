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
      this.nomeSocieta = "Audi";
      this.articolo = "dell'";
      this.percorso =
        "https://images.everyeye.it/img-notizie/ecco-audi-rs-e-tron-gt-bolide-elettrico-mostra-angolazione-v4-479147-1280x720.jpg";
    } else {
      this.nomeSocieta = "Ferrari";
      this.articolo = "della ";
      this.percorso =
        "https://media.magazine.ferrari.com/images/2019/03/25/112037181-ade321bc-2a1b-4a66-952f-d845c44073e8.jpg";
    }
    this.scelta = !this.scelta;
    this.numero++;
  }
}
