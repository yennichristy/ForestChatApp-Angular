import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signinPage: boolean = true;

  onSwitch() {
    this.signinPage = !this.signinPage;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
