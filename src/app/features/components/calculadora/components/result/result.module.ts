import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule
  ],
  exports: [ResultComponent],
  declarations: [ResultComponent]
})
export class ResultModule { }
