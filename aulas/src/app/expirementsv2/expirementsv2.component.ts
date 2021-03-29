import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expirementsv2',
  templateUrl: './expirementsv2.component.html',
  styleUrls: ['./expirementsv2.component.css']
})
export class Expirementsv2Component implements OnInit {

  @Input() receivedName

  @Output() passaInfo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  evClicked(): any {
    this.passaInfo.emit("carregou no botao");
  }

}
