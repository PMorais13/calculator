import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../shared/material.module';
import { ResultModule } from './components/result/result.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    ResultModule
  ],
  exports: [CalculadoraComponent],
  declarations: [CalculadoraComponent]
})
export class CalculadoraModule { }
