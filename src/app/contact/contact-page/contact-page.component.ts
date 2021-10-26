import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CommonAnimations } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  animations: [CommonAnimations.fadeInDownCascade],
})
export class ContactPageComponent implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';

  submitted: Boolean = false;
  requestSuccessful: Boolean | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitForm(contactForm: NgForm): void {
    this.submitted = true;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    this.http
      .post(
        'https://formspree.io/f/xjvjzqbz',
        { name: this.name, replyto: this.email, message: this.message },
        { headers: headers }
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.requestSuccessful = true;
          contactForm.reset();
        },
        (error) => {
          console.log(error);
          this.requestSuccessful = false;
        }
      );
  }

  goBackToForm(): void {
    this.submitted = false;
    this.requestSuccessful = null;
  }
}
