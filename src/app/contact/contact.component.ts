import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ContactPayload} from "../contact-payload";
import {ContactServiceService} from "../service/contact-service.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contactPayload: ContactPayload;
  email = new FormControl('');
  title = new FormControl('');
  body = new FormControl('');

  constructor(private contactService: ContactServiceService, private router: Router) {
    this.contactForm = new FormGroup({
      email: this.email,
      title: this.title,
      body: this.body
    });
    this.contactPayload = {
      title: '',
      body: '',
      email: ''
    }
  }

  ngOnInit() {
  }

  addContactPost() {
    this.contactPayload.title = this.contactForm.get('title').value;
    this.contactPayload.body = this.contactForm.get('body').value;
    this.contactPayload.email = this.contactForm.get('email').value;
    this.contactService.addContactPost(this.contactPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    })
  }
}
