import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'animacion',
    pathMatch: 'full'
  },
  {
    path: 'access',
    loadChildren: () => import('./page/access/access.module').then( m => m.AccessPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  
    {
      path: 'registro',
      loadChildren: () => import('./page/registro/registro.module').then(m => m.RegistroPageModule)
    },
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    },
    {
      path: 'welcome',
      loadChildren: () => import('./page/welcome/welcome.module').then(m => m.WelcomePageModule)
    },
    {
      path: 'access',
      loadChildren: () => import('./page/access/access.module').then(m => m.AccessPageModule)
    },
  {
    path: 'animacion',
    loadChildren: () => import('./page/animacion/animacion.module').then( m => m.AnimacionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'viajes',
    loadChildren: () => import('./page/viajes/viajes.module').then( m => m.ViajesPageModule)
  },
  
  {
    path: 'ayuda',
    loadChildren: () => import('.//page/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./page/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'pedirviaje',
    loadChildren: () => import('./page/pedirviaje/pedirviaje.module').then( m => m.PedirViajePageModule)
  },
  {
    path: 'loginconductor',
    loadChildren: () => import('./page/loginconductor/loginconductor.module').then( m => m.LoginconductorPageModule)
  },
  {
    path: 'registroconductor',
    loadChildren: () => import('./page/registroconductor/registroconductor.module').then( m => m.RegistroconductorPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./page/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'perfilconductor',
    loadChildren: () => import('./page/perfilconductor/perfilconductor.module').then( m => m.PerfilconductorPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'aces',
    loadChildren: () => import('./page/aces/aces.module').then( m => m.AcesPageModule)
  },
  {
    path: 'crearviaje',
    loadChildren: () => import('./page/crearviaje/crearviaje.module').then( m => m.CrearviajePageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
