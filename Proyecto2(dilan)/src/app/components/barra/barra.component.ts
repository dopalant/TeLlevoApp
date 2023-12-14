import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss'],
})
export class BarraComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  pedir() {
    
    this.router.navigate(['/pedirviaje'])
  }
  billetera(){

    this.router.navigate(['/billetera'])
  }
  perfil(){

    this.router.navigate(['/perfil'])
  }
  viajes(){

    this.router.navigate(['/viajes'])
  }
  mensajes(){

    this.router.navigate(['/mensajes'])
  }
  cerrarSesion() {
    // Llamar a la función de cierre de sesión en tu servicio de autenticación (AuthService)
    //this.authService.logout();-->
  
    // Redirigir a la página de inicio de sesión utilizando router.navigate
    this.router.navigate(['/login']); // Ajusta la ruta a la ubicación de tu página de inicio de sesión
  }

}
