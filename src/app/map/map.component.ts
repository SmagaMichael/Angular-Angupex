import { Component, OnInit } from '@angular/core';
import { Map } from '../map';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  AllMaps: Map[] = [];

  constructor(getMap: MapService) { 

    this.AllMaps = getMap.getMaps();
  }

  ngOnInit(): void {
  }

}
