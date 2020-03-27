import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token:string; 
  private currentUser: User = new User();
  private apiUrl = 'http://localhost:8080/kpiManager/api/users/auth';
  
  constructor(
    private http: HttpClient
  ) { }

  public login (user: User) {
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.post(this.apiUrl, user, requestOptions);
  }

  public setCurrentUser(res: string) {

    this.token = res;
  }

  
  public isAuthenticated(): boolean {
 console.log(this.token);
    if (this.token) {
      return true;
    } else {
      return false;
    }
  }

}
