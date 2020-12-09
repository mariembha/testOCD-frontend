import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs'
import { User } from '../models/user.model';
const baseUrl = 'http://localhost:9090';
@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    constructor(private http: HttpClient) { }
  
    getAll():Observable<User[]> {
      return this.http.get<User[]>(baseUrl+'/users');
    }

    delete(id) {
       return this.http.delete(baseUrl+'/users/'+ id);
    }

    create(data) {
        return this.http.post(baseUrl+'/users', data);
      }
      update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
      }
    }
