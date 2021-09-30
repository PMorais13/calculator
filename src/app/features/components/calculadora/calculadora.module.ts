import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    CdkStepperModule,
    MatFormFieldModule,
  ],
  declarations: [CalculadoraComponent]
})
export class CalculadoraModule { }
