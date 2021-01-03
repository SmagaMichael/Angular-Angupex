import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Map } from '../map';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-one-map',
  templateUrl: './one-map.component.html',
  styleUrls: ['./one-map.component.scss']
})
export class OneMapComponent implements OnInit {

  OneMap: Map;

  constructor(
    private route: ActivatedRoute,
    private getMap: MapService


  ) { }

  ngOnInit(): void {
        // 7 on appelle le service qui nous donne la légende qui correspond à l'url 

        // La variable OneMap aura la valeur 
        // que l'on va chercher grâce à la variable qui appelle le service MapService
        // dans ce MapService on récupére la fonction getOneMap 
        // puis on se sert du nom dans l'url afin de déterminer la map a afficher
        this.OneMap = this.getMap.getOneMap(this.route.snapshot.paramMap.get('name'));
  }
}
