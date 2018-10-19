import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { Config } from '../config';


@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }
  login(user): Observable<UserModel> {
    return this.http.post(Config.apiUrl + '/login/', user).pipe(map((res: any) => res.json()));
  }
}
