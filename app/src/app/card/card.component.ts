import { Component, OnInit, Input, Directive } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() title;
  userForm = this.fb.group({
    Name: [''],
    Address: [''],
  });
  isValid: boolean = false;
  isSuccess: boolean = false;
  errorMessage: string = "Address and name are required values.";
  successMessage: string = "The users information was saved successfully.";
constructor(private fb: FormBuilder) { }
ngOnInit() {
  }
  save() {
    if(this.userForm.value.Name === ("" || null) && this.userForm.value.Address !== ("" ||null)) {
      this.errorMessage = "Name is a required field.";
      this.isValid = false;
    } else if(this.userForm.value.Address === ("" || null) && this.userForm.value.Name !== ("" || null)) {
      this.errorMessage = "Address is a required field."
      this.isValid = false;
    } else if(this.userForm.value.Name === ("" || null) && this.userForm.value.Address === ("" || null)) {
      this.errorMessage = "Address and name are required values.";
      this.isValid = false;
    }
    else {
      this.isValid = true;

    }
    console.log(this.userForm.value.Name);
   }
   reset () {
    this.isValid = true;
     this.userForm.reset();
   }
}
