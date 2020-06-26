import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './model/persona'
import { Observable } from 'rxjs'
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:8080/personas';
  url2 = 'http://localhost:8080/personas/autenticacion';
  constructor(private http: HttpClient) { }

  save(persona:Persona): Observable<Persona>{
    return this.http.post<Persona>(this.url, persona);
  }

  getAll(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url);
  }

  findByEmailAndPassword(usuario:Usuario): Observable<Persona>{
    return this.http.post<Persona>(this.url2, usuario);
  }
}
//https://bezkoder.com/angular-spring-boot-jwt-auth/
