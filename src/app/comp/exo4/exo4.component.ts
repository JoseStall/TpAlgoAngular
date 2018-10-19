import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.css']
})
export class Exo4Component implements OnInit {
  propo: number = 0;
  x: number = 0;
  isWin: boolean = false;
  nbReponse: number = 0;
  htmlContent:string = "";



  constructor() {
    this.playTheGame()
  }

  ngOnInit() {
  }
  validerSaisie(propo) {

    if (propo < 0 || propo > 100) {
      this.htmlContent = "Il faut rentrer un nombre entre 0 et 100";
    }
    else if (propo > this.x) {
     this.htmlContent = this.propo + " est plus grand que le nombre mystére";
      this.nbReponse++
    }
    else if (propo < this.x) {
      this.htmlContent = this.propo + " est plus petit que le nombre mystére";
      this.nbReponse++
    }
    else if (propo === this.x) {
      this.htmlContent = 'bravo tu as gagné, le nombre mystére était bien ' + this.x + " , tu as trouvé en " + this.nbReponse + " essais.";
      this.isWin = true;
    }
  }
  playTheGame() {
    this.isWin = false ;
    this.htmlContent = "";
    this.nbReponse = 0;
    this.x = Math.floor(Math.random() * 100) ;


  }

}
