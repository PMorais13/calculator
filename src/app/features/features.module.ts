import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { CalculadoraModule } from './components/calculadora/calculadora.module';

@NgModule({
  imports: [
    CommonModule,
    CalculadoraModule
  ],
  exports: [FeaturesComponent],
  declarations: [FeaturesComponent]
})
export class FeaturesModule { }
