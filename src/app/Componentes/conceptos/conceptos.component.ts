import { Component } from '@angular/core';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.css']
})
export class ConceptosComponent {

/*EJEMPLO 1 ****************************************/
title = 'EJEMPLO 1';
ponFondo: boolean = true;
mostrar = true;
habilitar = false;
referencia = 'http://www.google.com';


/***************************************************/


/*EJEMPLO 3 ****************************************/
valor1: string = '10';
valor2: string = '20';
resultadoP: number = 0;

captaResultado(event: any) { 
  this.resultadoP = event; 
}
/***************************************************/


}
