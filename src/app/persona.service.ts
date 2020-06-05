import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './model/persona'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:8080/personas';
  constructor(private http: HttpClient) { }

  save(persona:Persona): Observable<Persona>{
    return this.http.post<Persona>(this.url, persona);
  }
}
