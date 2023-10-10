import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-value',
  templateUrl: './card-value.component.html',
  styleUrls: ['./card-value.component.css']
})
export class CardValueComponent implements OnInit {
  @Input()
  gameType:string = "Digital on ps5"
  @Input()
  gamePricing:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
