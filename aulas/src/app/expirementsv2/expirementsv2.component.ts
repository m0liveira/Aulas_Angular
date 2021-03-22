import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expirementsv2',
  templateUrl: './expirementsv2.component.html',
  styleUrls: ['./expirementsv2.component.css']
})
export class Expirementsv2Component implements OnInit {

  @Input() receivedName

  constructor() { }

  ngOnInit(): void {
  }

}
