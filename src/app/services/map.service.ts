import { Injectable } from '@angular/core';
import { Map } from '../map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  getMaps(): Map[] {
    return[
      { name: 'Canyon', bg:'Canyon.jpg'},
      { name: 'Bord du monde', bg:'BordDuMonde.jpg'},
      { name: 'Olympus', bg:'Olympus.jpg'},
    ]
    
  }
  // OLYMPUS
  // zone1:'Oasis',
  // zone2:'Transporteur',
  // zone3:'Docks',
  // zone4:'Réseau électrique',
  // zone5:'Faille',
  // zone6:'Turbine',
  // zone7:'Résidences',
  // zone8:'Hammond Labs',
  // zone9:'Dépot énergétique',
  // zone10:'Jardins',
  // zone11:'Quartier des tours',
  // zone12:'Canon orbital',
  // zone13:'Complexe solaire',
  // zone14:'Place Bonsaï',
  // zone15:'Complexe Hydroponique',
  // zone16:'Canon orbital',
  // zone17:'Elysium',
  // zone18:'...',
  // zone19:'...',


  // Canyon
  //zone1:'Base Aerienne',
  //zone2:'Drainage',
  //zone3:'Lacs Toxique',
  //zone4:'Arene',
  //zone5:'Confinement',
  //zone6:'Artillerie',
  //zone7:'Plateform',
  //zone8:'Condensateur',
  //zone9:'Marais',
  //zone10:'Labo',
  //zone11:'La cage',
  //zone12:'Barrage Hydrauliqge',
  //zone13:'Répulseur',
  //zone14:'Salle des Cartes',
  //zone15:'Traitement des eaux',
  //zone16:'Marché',
  //zone17:'Charnière',
  //zone18:'Repaire',
  //zone19:'Bunker',



  // Bord Du Monde
  //zone1:'Epreuves',
  //zone2:'Skyhook',
  //zone3:'Campement',
  //zone4:'Raffinerie',
  //zone5:'Epicentre',
  //zone6:'Décompte',
  //zone7:'Crevasse de lava',
  //zone8:'Gare de triage',
  //zone9:'Fragement Ouest/Est',
  //zone10:'Belvédére',
  //zone11:'Complexe',
  //zone12:'Collecteur',
  //zone13:'Geyser',
  //zone14:'Centrale Thermique',
  //zone15:'Usine de tri',
  //zone16:'Cité de lave',
  //zone17:'Arbre',
  //zone18:'Site de Lancement',
  //zone19:'Dôme',






// 5 on crée une fonction qui récupére une seul légende en se servant de son name
  getOneMap(name): Map {
    console.log(name);
// 6  On va dans le tableau de toutes les légendes 
    //    on cherche dans ce tableau un élément ) Legend
    //    Dans l'élément Legend on cherche son nom 
    //    son nom = name qui servira pour l'url 
    return this.getMaps().find(Map => Map.name === name);
  }

}

