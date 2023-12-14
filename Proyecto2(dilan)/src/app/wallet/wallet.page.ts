import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  agregarMetodoDePago(){}
  inicio() {
    this.router.navigate(['/access']);
  }
  redirigirAAccess() {
    this.router.navigate(['/access']);
  }  
}
