import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {



  constructor(private http:HttpClient) { }

  public getDatos(): Observable<any> {
      //return this.http.get('../../assets/data.json');
      return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

}

