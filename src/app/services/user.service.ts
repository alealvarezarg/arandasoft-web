import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  search(filter: string, rolname: string) {
    let getUserUrl = environment.getUserUrl;
    if(filter !== '' && rolname !== '')
    {
      getUserUrl = getUserUrl + "?filter=" + filter + "&rolname=" + rolname;
    } else if(filter !== '') {
      getUserUrl = getUserUrl + "?filter=" + filter;
    }else if(rolname !== '') {
      getUserUrl = getUserUrl + "?rolname=" + rolname;
    }
    return this.http.get(getUserUrl);
  }
}
