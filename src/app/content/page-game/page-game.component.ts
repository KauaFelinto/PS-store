import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css']
})
export class PageGameComponent implements OnInit {
  @Input()
  gameCover:string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gameName:string = "God of war"
  @Input()
  gameType:string = ""
  @Input()
  gamePricing:string = "R$149,90"

  private id:string|null = "0"

  constructor(private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id")
      )

      this.setValueComponent(this.id)
  }

  setValueComponent(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.gameName = result.title
    this.gameCover = result.photo
  }

}
