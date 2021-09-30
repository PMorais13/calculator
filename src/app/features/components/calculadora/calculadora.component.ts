import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper with editable steps
 */
@Component({
  selector: 'app-calculadora',
  templateUrl: 'calculadora.component.html',
  styleUrls: ['calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public firstFormGroup: FormGroup = new FormGroup({});
  public secondFormGroup: FormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
