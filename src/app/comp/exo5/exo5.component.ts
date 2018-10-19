import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo5',
  templateUrl: './exo5.component.html',
  styleUrls: ['./exo5.component.css']
})
export class Exo5Component implements OnInit {
  birth: number = 0;
  height: number = 0;
  htmlContent: string = "";

  constructor() { }

  ngOnInit() { }
  
  validerSaisie(birth, height) {
    if (birth > 20 && height < 100) {
      this.htmlContent = "Vous êtres peut être un nain adulte"
    } else if (birth > 20 && height > 200) {
      this.htmlContent = "Vous êtes un géant adulte.."
    } else if (birth < 3 && height < 50) {
      this.htmlContent = "Vous êtes un peu bébé"
    } else if ((birth > 15 && birth < 18) && (height > 150 && height < 180)) {
      this.htmlContent = "Vous êtes un ado"
    } else {
      this.htmlContent = "ok, RAS"
    }
  }
}

