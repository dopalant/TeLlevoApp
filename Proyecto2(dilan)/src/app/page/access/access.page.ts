import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet.locatecontrol';
import 'leaflet-control-geocoder';


declare const require: any;

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {
  map!: L.Map;
  customIcon!: L.Icon;
  currentMarker: L.Marker | null = null;
  routingControl!: any;
  geocoderControl!: any;
  usuarioPasajero: any = [];
  usernameFromRegistration: string | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.getPerfilUsuario();
    this.ionViewDidEnter();
  }

  getPerfilUsuario = async () => {
    const getToken = localStorage.getItem('token');
    if (getToken) {
      this.usuarioPasajero = JSON.parse(getToken);
      console.log(this.usuarioPasajero);
    }
  }

  ionViewDidEnter() {
    this.initializeMap();
    this.setupMapClickEvent();
    this.setupGeocoderControl();
  }

  initializeMap() {
    this.map = L.map('mapId').setView([-33.5985866, -70.579071], 20);

    L.tileLayer('https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=QhYhArkw9BXpAyN01Jpp', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    const lc = (L as any).control.locate().addTo(this.map);

    this.customIcon = L.icon({
      iconUrl: 'assets/marker-shadow.png',
      iconSize: [52, 52],
      iconAnchor: [26, 42],
      popupAnchor: [0, -32],
    });
  }

  setupMapClickEvent() {
    this.map.on('click', (event: L.LeafletMouseEvent) => {
      this.handleMapClick(event);
    });
  }

  async handleMapClick(event: L.LeafletMouseEvent) {
    try {
      const startPoint = this.map.getCenter();
      const destination = event.latlng;

      const route = await this.getRoute(startPoint, destination);
      await this.displayRoute(route);
    } catch (error) {
      console.error('Error al obtener o mostrar la ruta:', error);
    }
  }

  setupGeocoderControl() {
    this.geocoderControl = (L as any).Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on('markgeocode', (e: any) => {
        const destination = e.geocode.center;
        const startPoint = this.map.getCenter();

        this.getRoute(startPoint, destination)
          .then((route: any) => {
            this.displayRoute(route);
          })
          .catch((error: any) => {
            console.error('Error al obtener o mostrar la ruta:', error);
          });
      })
      .addTo(this.map);
  }

  getRoute(startPoint: L.LatLng, destination: L.LatLng): Promise<any> {
    return new Promise((resolve, reject) => {
      this.routingControl = (L as any).Routing.control({
        waypoints: [
          (L as any).latLng(startPoint.lat, startPoint.lng),
          (L as any).latLng(destination.lat, destination.lng)
        ],
        lineOptions: {
          styles: [{ color: 'red', opacity: 1, weight: 5 }],
          extendToWaypoints: true,
          missingRouteTolerance: 0.02
        }
      }).on('routesfound', (e: any) => {
        const route = e.routes[0];
        resolve(route);
      }).on('routingerror', (error: any) => {
        reject(error);
      }).addTo(this.map);
    });
  }

  displayRoute(route: any): Promise<void> {
    return new Promise((resolve) => {
      if (route && route.coordinates) {
        route.coordinates.forEach((coord: L.LatLng, index: number) => {
          setTimeout(() => {
            this.currentMarker?.setLatLng([coord.lat, coord.lng]);
          }, 100 * index);
        });
      }
      resolve();
    });
  }

  pedir() {
    this.router.navigate(['/pedirviaje']);
  }

  billetera() {
    this.router.navigate(['/wallet']);
  }

  perfil() {
    this.router.navigate(['/perfil']);
  }

  viajes() {
    this.router.navigate(['/viajes']);
  }

  mensajes() {
    this.router.navigate(['/mensajes']);
  }

  cerrarSesion() {
    this.router.navigate(['/home']);
  }

  
}