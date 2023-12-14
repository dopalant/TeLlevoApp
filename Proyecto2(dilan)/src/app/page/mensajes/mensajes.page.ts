import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class mensajesPage {
  segment: string = 'notifications'; // Valor predeterminado: notificaciones
  notificaciones: any[] = [
    { mensaje: 'Oferta especial en productos', tipo: 'oferta' },
    { mensaje: 'Nueva actualización disponible', tipo: 'actualizacion' },
    { mensaje: 'Mensaje de bienvenida', tipo: 'bienvenida' },
    // Agrega más notificaciones hipotéticas aquí
  ];
  conversaciones: any[] = [
    { nombre: 'Usuario 1', ultimoMensaje: 'Hola, ¿cómo estás?', hora: '10:00 AM' },
    { nombre: 'Usuario 2', ultimoMensaje: '¡Hola! ¿Qué tal?', hora: '11:30 AM' },
    { nombre: 'Usuario 3', ultimoMensaje: 'Buenos días', hora: '9:15 AM' },
    // Agrega más conversaciones hipotéticas aquí
  ];
  constructor(private router: Router) {}
  redirigirAAccess() {
    this.router.navigate(['/access']);
  }
  // Función para cambiar de segmento
  changeSegment(segmentValue: string) {
    this.segment = segmentValue;
  }
  billetera(){

    this.router.navigate(['/billetera'])
  }
  inicio(){

    this.router.navigate(['/access'])
  }
  viajes(){

    this.router.navigate(['/viajes'])
  }
  mensajes(){

    this.router.navigate(['/perfil'])
  }
}

