import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-value-content',
  templateUrl: './card-value-content.component.html',
  styleUrls: ['./card-value-content.component.css']
})
export class CardValueContentComponent implements OnInit {
  @Input()
  gameCover:string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gamePricing:string = ""
  @Input()
  gameName:string = ""
  @Input()
  gameInfo:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
