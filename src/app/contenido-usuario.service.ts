import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContenidoUsuarioService {

  url = 'http://localhost:8080/api/test/';

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(this.url + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.url + 'user', { responseType: 'text' });
  }

 // getModeratorBoard(): Observable<any> {
 //   return this.http.get(this.url + 'mod', { responseType: 'text' });
 // }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.url + 'admin', { responseType: 'text' });
  }

}
