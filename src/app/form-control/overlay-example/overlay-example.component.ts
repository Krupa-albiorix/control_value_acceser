import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { requiredFileType } from '../requiredFileType';

@Component({
  selector: 'app-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss']
})
export class OverlayExampleComponent implements OnInit {
  form! : FormGroup;

  constructor(private formBuilder : FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : new FormControl(),
      image: new FormControl('', [Validators.required, requiredFileType('jpg')]),
      // isLocked : new FormControl(false),
      isLocked : new FormControl({ value : false, disabled : false })
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value);
    console.log('this.form: ', this.form);
  }

}


