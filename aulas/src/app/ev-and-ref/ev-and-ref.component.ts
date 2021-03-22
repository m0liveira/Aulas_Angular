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
  translate: number = 0;
  shrink: number = 0;

  shrinkThis(refInput: HTMLElement) {
    this.shrink += 10;
    refInput.style.height = this.shrink + "px";
  }

  translateThis(refInput: HTMLElement) {
    if (refInput.classList.contains("translator")) {
      refInput.classList.remove("translator");
    } else {
      refInput.classList.add("translator");
    }
  }

  rotateThis(refInput: HTMLElement) {
    if (refInput.classList.contains("rotator")) {
      refInput.classList.remove("rotator");
    } else {
      refInput.classList.add("rotator");
    }
  }

  changeColor(colorX): string {
    return this.color = colorX;
  }


}
