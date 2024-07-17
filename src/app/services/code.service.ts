import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor(private http: HttpClient) { }

  validate(code : string) : boolean {
    console.log(code);
    // this.http.post(
    //   'URL_BACK',
    //   {
    //     code
    //   }
    // );
    return true;
  }
}
