import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LegendsComponent } from './legends/legends.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { OneLegendComponent } from './one-legend/one-legend.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { MapComponent } from './map/map.component';
import { OneMapComponent } from './one-map/one-map.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LegendsComponent,
    FooterComponent,
    OneLegendComponent,
    WeaponsComponent,
    MapComponent,
    OneMapComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'Legends', component: LegendsComponent},

      // 1 <a routerLink="/Legends/{{Legend.name}}">Voir la légende</a> 
      // remplace le name en dessous 
      {path:'Legends/:name', component: OneLegendComponent},
      {path:'Weapons', component: WeaponsComponent},
      {path:'Maps', component: MapComponent},

      {path:'Maps/:name', component: OneMapComponent},


      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
