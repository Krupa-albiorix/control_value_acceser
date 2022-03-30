import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateInputComponent,
      multi: true
    }
  ]

})
export class DateInputComponent implements ControlValueAccessor {
  _renderer: any;
  _elementRef: any;

  constructor() { }
  writeValue(dateISOString : string): void {
    const Value = formatDate(dateISOString, 'YYYY-MM-dd', 'en-IN');

      this._renderer.setAttribute(
        this._elementRef.nativeElement,
        'value',
        Value
      );
  }
  registerOnChange(fn: any): void {
   
  }
  registerOnTouched(fn: any): void {
    
  }

  ngOnInit(): void {
  }

}
