import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() {}

  // Función de inicio de sesión simulada
  iniciarSesion(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // Aquí deberías implementar la lógica real de autenticación
      // Por ejemplo, verificar las credenciales en un servidor.
      // Si las credenciales son válidas, establece isAuthenticated en true y resuelve la promesa con true.
      if (username === 'usuario' && password === 'contraseña') {
        this.isAuthenticated = true;
        resolve(true);
      } else {
        // Si las credenciales no son válidas, rechaza la promesa con false.
        reject(false);
      }
    });
  }

  // Otras funciones de autenticación, como cerrar sesión, verificar estado, etc.




  // Función para verificar el estado de autenticación
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Función de cierre de sesión
  logout(): void {
    this.isAuthenticated = false;
  }
}
