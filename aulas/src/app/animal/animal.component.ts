import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input() receivedAnimal

  constructor() { }

  ngOnInit(): void {
  }

}
