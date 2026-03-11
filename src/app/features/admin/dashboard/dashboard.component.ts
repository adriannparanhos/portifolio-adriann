import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ContactService } from '../../contact/data/services/contact.service';
import { AuthService } from '../../../core/services/auth.service';
import { ContactMessageResponse } from '../../contact/domain/models/contact.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe], 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private contactService = inject(ContactService);
  private authService = inject(AuthService);
  private router = inject(Router);

  messages = signal<ContactMessageResponse[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.contactService.getMessages().subscribe({
      next: (data) => {
        this.messages.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar mensagens', err);
        this.isLoading.set(false);
        if (err.status === 401 || err.status === 403) {
          this.logout();
        }
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}