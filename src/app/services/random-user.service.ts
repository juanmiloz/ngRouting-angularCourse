import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {IRandonContact} from "../models/randomUser";

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.log(`Ha ocurrido un error ${error.error}`)
    }else {
      console.log(`Error en el backend: ${error.status}. El error es ${error.error}`)
    }
    return throwError (() => new Error('Algo ha salido mal'))
  }

  getRandomContact(): Observable<any>{
    return this.http.get('https://randomuser.me/api').pipe(
      retry(2), // N° de reintentos de peticiones
      catchError(this.handleError) // sacamos el error si algo falla
    )
  }
}
