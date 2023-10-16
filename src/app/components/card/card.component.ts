import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameCover:string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gameType:string = "All plataform"
  @Input()
  gamePricing:string = ""
  @Input()
  gameName:string = ""
  @Input()
  gameInfo:string = "Fight"
  @Input()
  id:string = "0"
  constructor() { }

  ngOnInit(): void {
  }

}
