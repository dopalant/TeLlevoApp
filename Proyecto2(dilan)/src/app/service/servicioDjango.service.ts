import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioAPI } from "../interface/usuario";
import { retry } from "rxjs";
import { ConductorAPI } from "../interface/conductor";
import { Viajes } from "../interface/viajes";

@Injectable({
    providedIn: 'root'
}) 

export class ServicioDjangoService {
    [x: string]: any;
    CrearViaje(Viajes: Viajes) {
      throw new Error('Method not implemented.');
    }
    urlUsuario: string='http://127.0.0.1:8000/api/users/';
    urlConductor: string='http://127.0.0.1:8000/api/conductores/';
    urlViajes: string='http://127.0.0.1:8000/api/viajes/';

    constructor(private http:HttpClient){}

    getUsuario(){
        return this.http.get<UsuarioAPI[]>(this.urlUsuario);
    }
    crearUsuario(usuario:UsuarioAPI){
        return this.http.post(this.urlUsuario,usuario).pipe(retry(3));
    }

    getConductor(){
        return this.http.get<ConductorAPI[]>(this.urlConductor);
    }

    crearConductor(conductor:ConductorAPI){
        return this.http.post(this.urlConductor,conductor).pipe(retry(3));
    }

    getViajes(){
        return this.http.get<Viajes[]>(this.urlViajes);
    }

    CrearViajes(viajes:Viajes){
        return this.http.post(this.urlViajes,viajes).pipe(retry(3));
    }
}