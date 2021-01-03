import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    //Par défaut le menu est fermé 
    isCollapsed = '';

    toggleCollapseNavbar(){
      if(this.isCollapsed === ''){
        this.isCollapsed = 'show';
      }else{
        this.isCollapsed = '';
      }
    }
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
