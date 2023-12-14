import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy} from '@ionic/angular';
//import { MenuButtonComponent } from 'src/app/components/menu-button/menu-button.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
/////////////////////////////////////////////

@NgModule({
  declarations: [AppComponent,
  ],
  imports: [BrowserModule,
  BrowserAnimationsModule, 
  IonicModule.forRoot(), 
  AppRoutingModule,
  HttpClientModule,
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule {}
