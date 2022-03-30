import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { requiredFileType } from '../requiredFileType';

@Component({
  selector: 'app-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss']
})
export class OverlayExampleComponent implements OnInit {
  form! : FormGroup;

  // @Input() value: any;

  constructor(private formBuilder : FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : new FormControl(),
      image: new FormControl('', [Validators.required, requiredFileType('jpg')]),
      date: new FormControl(new Date().toISOString()),
      // isLocked : new FormControl(false),
      isLocked : new FormControl({ value : false, disabled : false })
    });
  }

  get date() {
    return this.form.get('date');
  }

  get f(){
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value);
    console.log('this.form: ', this.form);
  }

}


