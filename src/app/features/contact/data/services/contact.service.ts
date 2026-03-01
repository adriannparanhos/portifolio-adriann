import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactRequest } from '../../domain/models/contact.model';

@Injectable({
  providedIn: 'root' 
})

export class ContactService {
    private readonly API_URL = 'http://localhost:8080/api/contact';

    constructor(private http: HttpClient) {}

    public sendMessage(request: ContactRequest): Observable<void> {
    // Retorna um Observable. O componente decide o que fazer quando a resposta chegar.
    return this.http.post<void>(this.API_URL, request);
  }
}