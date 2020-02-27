import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
    this.profileForm = formBuilder.group({
      email: new FormControl(''),
      nome: new FormControl('')
    });
  }

  ngOnInit() {
  }

  update(formValue): void {

  }

}
