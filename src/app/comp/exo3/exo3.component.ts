import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})
export class Exo3Component implements OnInit {
  floor: number = 0;
  choice: number = 0;
  tree: string = "";
  treeFinal: string = "";

  constructor() { }

  ngOnInit() {
  }
  validerSaisie(floor, choice) {
    switch (choice) {
      case 1:
        this.tree = "";
        this.treeFinal = "";
        for (let i = 0; i < floor; i++) {
          this.tree = "&nbsp;".repeat(floor - i) + "#".repeat(i * 2) + "#" + "&nbsp;".repeat(floor - i);
          this.treeFinal += "<div>" + this.tree + "</div>";
        }

        break;
      case 2:
        this.tree = "";
        this.treeFinal = "";
        for (let i = 1; i <= floor; i++) {

          if (i === 1) {
            this.tree = "&nbsp;".repeat(floor - i + 1) + "#" + "&nbsp;".repeat(floor - i);
            this.treeFinal += "<div>" + this.tree + "</div>"
          } else if (i === floor) {
            this.tree = "#".repeat(floor * 2 + 1)
            this.treeFinal += "<div>" + this.tree + "</div>"
          } else {
            this.tree = "&nbsp;".repeat(floor - i) + "#" + "&nbsp;".repeat(i * 2 - 1) + "#" + "&nbsp;".repeat(floor - i)
            this.treeFinal += "<div>" + this.tree + "</div>"

          }
        }
        break;
      case 3:
        this.tree = "";
        this.treeFinal = "";
        for (let i = 0; i < floor; i++) {
          this.tree = "#".repeat(i) + "&nbsp;".repeat(floor - i);
          this.treeFinal += "<div>" + this.tree + "</div>";

        };
        for (let i = floor; i > 0; i--) {
          this.tree = "#".repeat(i) + "&nbsp;".repeat(floor - i);
          this.treeFinal += "<div>" + this.tree + "</div>";

        };
        break;
      default:
        break;
    }

  }
}

