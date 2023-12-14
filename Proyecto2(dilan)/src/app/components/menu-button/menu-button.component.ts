import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent {
  constructor(private menuController: MenuController,private router:Router,private authService: AuthService) {}

  mostrarMenu() {
    this.menuController.open('menuPrincipal'); // Reemplaza 'menuPrincipal' con el nombre de tu menú
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
    this.authService.logout();
  
    // Redirigir a la página de inicio de sesión utilizando router.navigate
    this.router.navigate(['/login']); // Ajusta la ruta a la ubicación de tu página de inicio de sesión
  }
  
}

