import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lock-input',
  templateUrl: './lock-input.component.html',
  styleUrls: ['./lock-input.component.scss']
})
export class LockInputComponent implements OnInit {
  islocked = false;

  constructor() { }

  ngOnInit(): void {
  }

}
