import { Component, OnInit } from '@angular/core';
import { Legend } from '../legend';
import { LegendsService } from '../services/legends.service';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.scss']
})
export class LegendsComponent implements OnInit {



  AllLegends: Legend[] = [];

//pour récupérer le service ou il y a toutes les légendes on se sert du constructeur
  constructor(getLegend: LegendsService) { 
    console.log(getLegend.getLegends());
    this.AllLegends = getLegend.getLegends();
  }

  ngOnInit(): void {
  }

}
