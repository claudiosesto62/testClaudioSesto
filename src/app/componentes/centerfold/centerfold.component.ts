import { Component, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-centerfold',
  templateUrl: './centerfold.component.html',
  styleUrls: ['./centerfold.component.css']
})
export class CenterfoldComponent implements OnInit {

  oldEvent: HTMLElement = null
  bsqStr: string = ""
  selector: number = 0;
  
 heroes = [
    {id: 1, categoria:'Zapatillas', color:'Blanco', talle:'36',
     url:'../assets/productos/zapatilla_1.jpg',precio:'5000', desc:'1-ZFK'},
    {id: 2, categoria:'Botas', color:'Negro', talle:'38', 
    url:'../assets/productos/zapatilla_2.jpg',precio:'5000', desc:'2000-X'},
     {id: 3, categoria:'Zapatillas', color:'Verde', talle:'42', 
    url:'../assets/productos/zapatilla_3.jpg',precio:'5000', desc:'1-ZFK'},
    {id: 4, categoria:'Zapatillas', color:'Blanco', talle:'44', 
    url:'../assets/productos/zapatilla_1.jpg' ,precio:'5000', desc:'1-ZFK'},
    {id: 5, categoria:'Zapatillas', color:'Amarillo', talle:'40', 
    url:'../assets/productos/zapatilla_3.jpg',precio:'5000', desc:'3 Run'},
    {id: 1, categoria:'Zapatillas', color:'Blanco', talle:'36',
    url:'../assets/productos/zapatilla_1.jpg',precio:'5000', desc:'1-ZFK'},
   {id: 2, categoria:'Botas', color:'Negro', talle:'38', 
   url:'../assets/productos/zapatilla_2.jpg',precio:'5000', desc:'2000-X'},
    {id: 3, categoria:'Zapatillas', color:'Verde', talle:'42', 
   url:'../assets/productos/zapatilla_3.jpg',precio:'5000', desc:'1-ZFK'},
   {id: 4, categoria:'Zapatillas', color:'Blanco', talle:'44', 
   url:'../assets/productos/zapatilla_1.jpg' ,precio:'5000', desc:'1-ZFK'},
   {id: 5, categoria:'Zapatillas', color:'Amarillo', talle:'40', 
   url:'../assets/productos/zapatilla_3.jpg',precio:'5000', desc:'3 Run'},    {id: 1, categoria:'Zapatillas', color:'Blanco', talle:'36',
   url:'../assets/productos/zapatilla_1.jpg',precio:'5000', desc:'1-ZFK'},
  {id: 2, categoria:'Botas', color:'Negro', talle:'38', 
  url:'../assets/productos/zapatilla_2.jpg',precio:'5000', desc:'2000-X'},
   {id: 3, categoria:'Zapatillas', color:'Verde', talle:'42', 
  url:'../assets/productos/zapatilla_3.jpg',precio:'5000', desc:'1-ZFK'},
  {id: 4, categoria:'Zapatillas', color:'Blanco', talle:'44', 
  url:'../assets/productos/zapatilla_1.jpg' ,precio:'5000', desc:'1-ZFK'},
  {id: 5, categoria:'Zapatillas', color:'Amarillo', talle:'40', 
  url:'../assets/productos/zapatilla_3.jpg',precio:'5000', desc:'3 Run'},
];
  constructor() { }

  ngOnInit(): void {
  }

selectCategoria(e: Event, filtra: number){
const tar = e.target as HTMLElement // genial el cambio de tipo
this.bsqStr= tar.innerText.toLowerCase()
this.selector = filtra
console.log('filtrando por : ' + this.bsqStr)
if (tar == this.oldEvent){
  this.oldEvent.style.backgroundColor = ''
  this.selector = 0
}
this.getElementos()

tar.style.backgroundColor = 'lightgray';
  if(this.oldEvent != null){
    this.oldEvent.style.backgroundColor = ''
  //  this.oldEvent = null
  }

  this.oldEvent = tar
 // this.selector = 0
} 


getElementos(){
switch (this.selector){
    case 1: {
      let filtrado = this.heroes.filter(xx => xx.categoria.toLowerCase() === this.bsqStr)
      return filtrado
      break;
    }
    case 2: {
      let filtrado =this.heroes.filter(xx => xx.talle === this.bsqStr)
      return filtrado
      break;
    }
    case 3: {
   
      let filtrado = this.heroes.filter(xx => xx.color.toLowerCase() === this.bsqStr)
      return filtrado
      break;
    }
    
    default: {
     let filtrado = this.heroes
      return filtrado 
      break;
    } 
}
 
}
}


