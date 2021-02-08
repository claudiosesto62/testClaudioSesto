import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-centerfold',
  templateUrl: './centerfold.component.html',
  styleUrls: ['./centerfold.component.css']
})
export class CenterfoldComponent implements OnInit {
 heroes = [
    {id: 1, categoria:'Zapatilla', color:'blanco', talle:'36',
     url:'../assets/productos/zapatilla_1.jpg',precio:'5000', desc:'1-ZFK'},
    {id: 2, categoria:'Botas', color:'blanco', talle:'38', 
    url:'../assets/productos/zapatilla_2.jpg',precio:'5000', desc:'2000-X'},
    {id: 5, categoria:'Zapatilla', color:'blanco', talle:'40', 
    url:'../assets/productos/zapatilla_3.jpg',precio:'5000', desc:'3 Run'},
    {id: 3, categoria:'Zapatilla', color:'blanco', talle:'42', 
    url:'../assets/productos/zapatilla_1.jpg',precio:'5000', desc:'1-ZFK'},
    {id: 4, categoria:'Zapatilla', color:'blanco', talle:'44', 
    url:'../assets/productos/zapatilla_2.jpg' ,precio:'5000', desc:'1-ZFK'},
    {id: 1, categoria:'Zapatilla', color:'blanco', talle:'36',
    url:'../assets/productos/zapatilla_1.jpg',precio:'5000', desc:'1-ZFK'},
   {id: 2, categoria:'Botas', color:'blanco', talle:'38', 
   url:'../assets/productos/zapatilla_2.jpg',precio:'5000', desc:'2000-X'},
   {id: 5, categoria:'Zapatilla', color:'blanco', talle:'40', 
   url:'../assets/productos/zapatilla_3.jpg',precio:'5000', desc:'3 Run'},
   {id: 3, categoria:'Zapatilla', color:'blanco', talle:'42', 
   url:'../assets/productos/zapatilla_1.jpg',precio:'5000', desc:'1-ZFK'},
   {id: 4, categoria:'Zapatilla', color:'blanco', talle:'44', 
   url:'../assets/productos/zapatilla_2.jpg' ,precio:'5000', desc:'1-ZFK'},
   {id: 1, categoria:'Zapatilla', color:'blanco', talle:'36',
   url:'../assets/productos/zapatilla_1.jpg',precio:'5000', desc:'1-ZFK'},
  {id: 2, categoria:'Botas', color:'blanco', talle:'38', 
  url:'../assets/productos/zapatilla_2.jpg',precio:'5000', desc:'2000-X'},
  {id: 5, categoria:'Zapatilla', color:'blanco', talle:'40', 
  url:'../assets/productos/zapatilla_3.jpg',precio:'5000', desc:'3 Run'},
  {id: 3, categoria:'Zapatilla', color:'blanco', talle:'42', 
  url:'../assets/productos/zapatilla_1.jpg',precio:'5000', desc:'1-ZFK'},
  {id: 4, categoria:'Zapatilla', color:'blanco', talle:'44', 
  url:'../assets/productos/zapatilla_2.jpg' ,precio:'5000', desc:'1-ZFK'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
