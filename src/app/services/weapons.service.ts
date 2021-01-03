import { Injectable } from '@angular/core';
import { Weapon } from '../weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {


  constructor() { }

  getAssaultRifles(): Weapon[] {
      return[
        {id:1, name:'VK-47 Flatline'},
        {id:2, name:'G7 Scout'},
        {id:3, name:'Hemlok Burst AR'},
        {id:4, name:'R-301 Carbine'},
        {id:5, name:'HAVOC Rifle'},
      ]
  }


  getSubMachineGuns(): Weapon[] {
    return[
      {id:1, name:'Alternator SMG'},
      {id:2, name:'Prowler Burst PDW'},
      {id:3, name:'R-99 SMG'},
      {id:4, name:'Volt SMG'},
    ]
  }

  getLightMachineGuns(): Weapon[] {
    return[
      {id:1, name:'Devotion LMG'},
      {id:2, name:'M600 Spitfire'},
      {id:3, name:'L-STAR EMG'},
    ]
  }

  getSniperRifles(): Weapon[] {
    return[
      {id:1, name:'Longbow DMR'},
      {id:2, name:'Kraber .50-Cal Sniper'},
      {id:3, name:'Triple Take'},
      {id:4, name:'Charge Rifle'},
      {id:5, name:'Sentinel'},
    ]
  }

  getShotGuns(): Weapon[] {
    return[
      {id:1, name:'EVA-8 Auto'},
      {id:2, name:'Mastiff Shotgun'},
      {id:3, name:'Mozambique Shotgun'},
      {id:4, name:'Peacekeeper'},
    ]
  }

  getPistols(): Weapon[] {
    return[
      {id:1, name:'RE-45 Auto'},
      {id:2, name:'P2020'},
      {id:3, name:'Wingman'},
    ]
  }









}
