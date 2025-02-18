import { Component, model } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface CalendarDay {
  date: number;
  status: 'Libre' | 'Occupé' | 'Disabled';
}

@Component({
  selector: 'app-block-3',
  imports: [
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './block-3.component.html',
  styleUrl: './block-3.component.scss',
  providers: [MatDatepickerModule],
})
export class Block3Component {
  currentMonth: number = 5;
  currentYear: number = 2025;
  weeks: CalendarDay[][] = [];

  // form
  contactForm!: FormGroup;
  uploadedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.generateCalendar();
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      file: [null],
    });
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();
    let daysArray: CalendarDay[] = [];

    for (let i = 0; i < firstDay; i++) {
      daysArray.push({ date: 0, status: 'Disabled' });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const status =
        i % 7 === 0 || i % 5 === 0 ? 'Libre' : i % 6 === 0 ? 'Occupé' : 'Libre';
      daysArray.push({ date: i, status });
    }

    while (daysArray.length % 7 !== 0) {
      daysArray.push({ date: 0, status: 'Disabled' });
    }

    this.weeks = [];
    for (let i = 0; i < daysArray.length; i += 7) {
      this.weeks.push(daysArray.slice(i, i + 7));
    }
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      if (file.type === 'application/pdf') {
        this.uploadedFile = file;
      } else {
        alert('Only PDF files are allowed.');
      }
    }
  }

  clearForm() {
    this.contactForm.reset();
    this.uploadedFile = null;
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
    }
  }
}
