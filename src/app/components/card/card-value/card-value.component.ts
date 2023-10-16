import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-value',
  templateUrl: './card-value.component.html',
  styleUrls: ['./card-value.component.css']
})
export class CardValueComponent implements OnInit {
  @Input()
  gameName:string = ""
  @Input()
  gameType:string = ""
  @Input()
  gamePricing:string = ""
  @Input()
  gameInfo:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
