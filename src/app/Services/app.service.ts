import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const apiUrl = 'http://cdn.prevenirexpress.com:3000';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  postFormulario(info){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(apiUrl + '/emails', info, { headers: headers });
   }
  
   getDepartamentos(){
    return this.http.get(apiUrl + '/departamentos/47', {headers});
  }
  
  getMunicipios(id){
   return this.http.get(apiUrl + '/municipios/' + id);
  } 
}


