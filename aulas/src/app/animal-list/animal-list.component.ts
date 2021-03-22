import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
    constructor() { }

  ngOnInit(): void {
  }

  race: Array<string> = ["rato esquilo", "macaco", "furao", "foca"];
  theAnimal: string = "";
}
