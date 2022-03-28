import { FormControlModule } from './form-control/form-control.module';
import { LockInputComponent } from './form-control/lock-input/lock-input.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayExampleComponent } from './form-control/overlay-example/overlay-example.component';
// import { FileUploadComponent } from './form-control/lock-input/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    OverlayExampleComponent,
    LockInputComponent,
    // FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
