import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockInputComponent } from './lock-input/lock-input.component';
import { OverlayExampleComponent } from './overlay-example/overlay-example.component';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    // LockInputComponent,
    // OverlayExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    
  ]
})
export class FormControlModule { }
