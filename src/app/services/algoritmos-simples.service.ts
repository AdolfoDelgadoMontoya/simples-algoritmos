import { Injectable } from '@angular/core';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
/*
npm install @types/plotly.js-dist-min
*/
PlotlyModule.plotlyjs = PlotlyJS;

@Injectable({
  providedIn: 'root'
})
export class AlgoritmosSimplesService {

  constructor() { }

  esPrimo(n:number):boolean{
    if(n<=1){
      return false;
    }
    for (let i = 2; i<n/2;i++){
      if(n%i==0){
        return false;
      }
    }
    return true;
  }

  fibonachi(n:number):number[]{
    let fibo = [0,1];
    for(let i=6;i<=n;i++){
      fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
  }
}
