import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
  
})
export class ViajesPage implements OnInit {

  constructor(private router:Router) { }
  redirigirAAccess() {
    this.router.navigate(['/access']);
  }  
  ngOnInit() {
  }
  inicio(){

    this.router.navigate(['/access'])
  }
  perfil(){

    this.router.navigate(['/perfil'])
  }
  mensajes(){

    this.router.navigate(['/mensajes'])
  }

  redirigirAInicio() {
    this.router.navigate(['/access']);
  }
}
