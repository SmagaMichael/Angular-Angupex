import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Legend } from '../legend';
import { LegendsService } from '../services/legends.service';

@Component({
  selector: 'app-one-legend',
  templateUrl: './one-legend.component.html',
  styleUrls: ['./one-legend.component.scss']
})
export class OneLegendComponent implements OnInit {

  //2 on crée la page OneLegend 
  OneLegend: Legend;

  constructor(
    // 3 permet de récupérer le name dans l'url
    private route: ActivatedRoute,
    //  4 permet de récupérer legends.service.ts et se servir de GetOneLegend
    private getLegend: LegendsService
    
    ) {}


  ngOnInit(): void {

    // 7 on appelle le service qui nous donne la légende qui correspond à l'url 
    this.OneLegend = this.getLegend.getOneLegend(this.route.snapshot.paramMap.get('name'));
    
  }

}
