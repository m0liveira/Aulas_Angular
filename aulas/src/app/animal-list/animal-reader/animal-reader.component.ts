import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/classes/animal';

@Component({
  selector: 'app-animal-reader',
  templateUrl: './animal-reader.component.html',
  styleUrls: ['./animal-reader.component.css']
})
export class AnimalReaderComponent implements OnInit {

  @Input() animalLido: Animal;

  constructor() { }
  ngOnInit(): void {
  }

}
