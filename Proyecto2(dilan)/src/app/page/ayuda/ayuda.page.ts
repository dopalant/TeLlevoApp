import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {problema: string = '';

enviarProblema() {
  // Simula una respuesta hipotética
  const respuestaHipotetica = 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.';
  console.log(`Usuario escribió: ${this.problema}`);
  console.log(`Respuesta: ${respuestaHipotetica}`);
}

  constructor() { }

  ngOnInit() {
  }

}
