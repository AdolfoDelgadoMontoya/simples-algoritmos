import { Component, OnInit } from '@angular/core';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public grafica = {data:[{x:[1,2,3],y:[5,6,7],type:'bar'}]};
  constructor() {}
  
  ngOnInit(){
    this.poblar();
  }
  /*
  si ngOnInit aparece en amarillo, debemos de agregarle:void
  si no se tiene la funcion  se agrega:
  
  */
  poblar(){
    this.poblarX(100);
    this.poblarY(100);
  }

  poblarX(num:number){
    for(let i=0;i<num;i++){
      this.grafica.data[0].x[i]=i;
    }
  }

  poblarY(num:number){
    for(let i=0;i<num;i++){
      this.grafica.data[0].x[i]=
      Math.floor(Math.random()*num)+1;
    }
  }
}
