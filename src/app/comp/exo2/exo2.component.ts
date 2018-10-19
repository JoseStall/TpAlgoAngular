import { Component, OnInit,  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component implements OnInit {
  num:number = 0;
  lists: Array <number> = [];
  somme: number = 0;
  moyenne: number;

  constructor() { 

  }

  ngOnInit() {
  }

  validerSaisie()
  {
    let i:number;
    if(this.num >= 0) {
        this.lists = new Array<number>();
        for(i=0;i<this.num;i++) {
            this.lists.push(0);
        }       
    }
  }

  saisie(i:number, event) {
    this.lists[i] = +(event.target.value);   
  }

  calculer() {
    let i:number;
    for(i=0;i<this.lists.length;i++) {
      this.somme += this.lists[i];
    }
    this.moyenne = this.somme / this.lists.length;
  }
}
