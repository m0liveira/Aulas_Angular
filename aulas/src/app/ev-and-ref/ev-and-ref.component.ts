import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color: string = "default";


  rotator: string = "180deg";

  rotateThis(refInput:HTMLElement) {
    refInput.style.transform = "rotate(this.rotator)";
  }

  changeColor(colorX): string {
    return this.color = colorX;
  }


}
