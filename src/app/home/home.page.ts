import { Component, OnInit, numberAttribute } from '@angular/core';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;

import { AlgoritmosSimplesService } from '../services/algoritmos-simples.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public grafica = {data:[{x:[1,2,3],y:[5,6,7],type:'bar'}],layout:{title:'',width:500,height:500}};
  constructor(private miObj:AlgoritmosSimplesService) {}
  
  ngOnInit(){
    this.poblar();
    this.bubbleSort();
    this.generar(1000);
  }
  
  poblar(){
    this.poblarX(100);
    this.poblarY(100);
  }

  poblarX(num:number){
    for(let i=0;i<num;i++){
      this.grafica.data[0].x[i]=i;
    }
  }

  bubbleSort(){
    let checar;
    do{
      checar=false;
      for(let i=0;i < this.grafica.data[0].y.length;i++){
        if(this.grafica.data[0].y[i]>this.grafica.data[0].y[i+1]){
          let tmp = this.grafica.data[0].y[i];
          this.grafica.data[0].y[i]=this.grafica.data[0].y[i+1]
          this.grafica.data[0].y[i+1]=tmp;
          checar=true;
        }
      }
    }while(checar);
  }

  fibonacci:number[]=[];
  primos:number[]=[];
  
  generar(n:number){
    this.fibonacci=this.miObj.fibonachi(n);
    for(let i=0; i<= n;i++){
      this.primos.push(
        this.miObj.esprimo(i)
      );
    }  
  }

  poblarY(num:number){
    for(let i=0;i<num;i++){
      this.grafica.data[0].y[i]=
      Math.floor(Math.random()*num)+1;
    }
  }
}
