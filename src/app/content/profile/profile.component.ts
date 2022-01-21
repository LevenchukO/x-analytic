import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      first_name: ['Oleg', [Validators.required]],
      second_name: ['Levenchuk', [Validators.required]],
      date_of_birthday: ['15-11-1985', [Validators.required]],
      phones: this.fb.array([['0975383385', []], ['0975383385', []]]),
    });
  }

  getPhoneNumberControls(): FormArray {
    return this.profileForm.controls['phones'] as FormArray;
  }
}
