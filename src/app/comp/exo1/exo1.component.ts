import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {
  feet = "1 kilomètre à pied, ça use, ça use,1 kilomètre à pied ça use les souliers <br> ";
  constructor() {
  }
  ngOnInit() {
    for (let i = 2; i <= 15; i++) {
      this.feet += i + " kilomètres à pied, ça use, ça use, " + i + " kilomètres à pied ça use les souliers. <br>"
    }
  }
}
