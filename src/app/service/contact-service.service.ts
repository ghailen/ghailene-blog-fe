import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ContactPayload} from "../contact-payload";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private url: string = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) {
  }


  addContactPost(data: ContactPayload): Observable<ContactPayload> {
    return this.httpClient.post<ContactPayload>(this.url + "/mail", data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
