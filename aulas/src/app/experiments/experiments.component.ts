import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animalArr: Array<string> = ["cao", "gato", "macaco", "rato esquilo"];
  name: string = "0liveira";

  changeName(event): any {
    this.name = event.target.value;
  }

  recebi(event): any{
    console.log(event);
  }
}
