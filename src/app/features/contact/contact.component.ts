import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './data/services/contact.service';
import { ContactRequest } from './domain/models/contact.model';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public contactForm!: FormGroup;
  public translationService = inject(TranslationService);
  public t = this.translationService.t;
  public isLoading = signal(false);

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.buildForm();
  }

  private buildForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  public onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const requestData: ContactRequest = this.contactForm.value;

    this.contactService.sendMessage(requestData).subscribe({
      next: () => {
        this.contactForm.reset();
      },
      error: (err: any) => {
        console.error('Erro ao enviar mensagem:', err);
        alert('O servidor (Java) ainda está dormindo. Acorde-o em breve!');
      }
    })
  }

  public isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }
}
