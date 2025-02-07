import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-mi-cangreja',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './mi-cangreja.component.html',
  styleUrls: ['./mi-cangreja.component.scss'],
  animations: [
    trigger('escalarBoton', [
      state('0', style({
        transform: 'scale(1)'
      })),
      state('1', style({
        transform: 'scale(1.15)'
      })),
      transition('* => *', animate('300ms ease'))
    ]),
    trigger('moverBoton', [
      transition('* => *', [
        animate('300ms ease', style({ transform: 'translateX({{random}}px)' }))
      ])
    ])
  ]
})
export class MiCangrejaComponent {
  private audio = new Audio();
  
  constructor() {
    this.audio.src = "assets/miamor.mp3";
    this.audio.load();
  }
  palabras: string[] = [
    "NO", 
    "Estas segura? :(", 
    "Piensalo una vez mas ;)", 
    "Ni por una scooby galleta? :(", 
    "Por favoooor", 
    "Di que si :(", 
    "Si tocas aqui me debes un helado :V", 
    "Matame mejor :("
  ];
  
  contadorNo = 0;
  mensajeExito = false;
  botonNoActual = this.palabras[0];
  escalaBotonSi = 1;

  alPresionarNo() {
    if (this.contadorNo < this.palabras.length - 1) {
      this.contadorNo++;
      this.botonNoActual = this.palabras[this.contadorNo];
      this.escalaBotonSi += 0.2;
    }
  }

  alPresionarSi() {
    this.mensajeExito = true;
    this.audio.play();
  }
}