import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {UserResponse} from '../model/UserResponse';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import {_throw} from 'rxjs/observable/throw';
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Slaves} from "../model/Slaves";

@Injectable()
export class BrainServiceApi {
  protected basePath = 'https://mainbrain.herokuapp.com';

  constructor(protected http: HttpClient) {
  }


  public getStatus(): Observable<{}> {
    const path = this.basePath + '/status';

    const queryParameters = new URLSearchParams();
    const headers = new HttpHeaders();

    // to determine the Content-Type header
    const consumes: string[] = [];

    // to determine the Accept header
    const produces: string[] = [
      'application/json'
    ];

    return this.http.get<Slaves>(path, {
      headers: headers
    });
  }


  public request(slaveId: String, parameterName: String): Observable<{}> {

    const path = this.basePath + '/request/' + slaveId + '/' + parameterName;

    const queryParameters = new URLSearchParams();

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'text/plain');

    return this.http.get<Slaves>(path, {
      headers: headers
    });
  }


  public send(slaveId: String, parameterName: String, type: String, value: String): Observable<{}> {


    const path = this.basePath + '/execute';

    const queryParameters = new URLSearchParams();

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    //  headers = headers.set('Content-Type', 'text/plain');

    const body = {
      'id': slaveId,
      'function': parameterName,
      'type': type,
      'parameter': value
    };

    return this.http.post<Slaves>(path, body, {
      headers: headers
    });
  }
}
