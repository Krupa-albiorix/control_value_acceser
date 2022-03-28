import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALIDATORS, ControlValueAccessor, Validator, AbstractControl, ValidationErrors, EmailValidator, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss'],
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: OverlayExampleComponent,
      multi: true
    },
  ],
})
export class OverlayExampleComponent implements OnInit {
  form! : FormGroup;

  constructor(private formBuilder : FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : new FormControl(),
      // isLocked : new FormControl(false),
      isLocked : new FormControl({ value : false, disabled : false })
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
