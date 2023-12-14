import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.page.html',
  styleUrls: ['./animacion.page.scss'],
})
export class AnimacionPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() :void {
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },5000);
  }

}
