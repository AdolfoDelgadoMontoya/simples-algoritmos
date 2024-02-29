import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
  public grafica = {
    data:[{
      x:[1,2,3], y:[5,6,7],type:'bar'
    }],
  }
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
