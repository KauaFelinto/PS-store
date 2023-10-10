import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css']
})
export class PageGameComponent implements OnInit {
  @Input()
  gameCover:string = "assets/God-of-war.jpg"
  @Input()
  gameLabel:string = ""
  @Input()
  gameName:string = "God of war"
  @Input()
  gameType:string = "Digital on ps5"
  @Input()
  gamePricing:string = "R$149,90"
  constructor() { }

  ngOnInit(): void {
  }

}
