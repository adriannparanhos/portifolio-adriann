import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessageResponse, ContactRequest } from '../../domain/models/contact.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/contacts`;

  getMessages(): Observable<ContactMessageResponse[]> {
    return this.http.get<ContactMessageResponse[]>(this.apiUrl);
  }

  sendMessage(data: ContactRequest): Observable<void> {
    return this.http.post<void>(this.apiUrl, data);
  }
}