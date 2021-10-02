import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ListGodsRepository } from 'src/app/repository/list-gods.repository';
import { God } from '../../interfaces/god.interface';

/**
 * @title Stepper with editable steps
 */
@Component({
  selector: 'app-calculadora',
  templateUrl: 'calculadora.component.html',
  styleUrls: ['calculadora.component.css']
})


export class CalculadoraComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public atributos: number = 0;
  public god: God | undefined;
  public gods: Array<God> = this.listgodsRepository.gods;

  constructor(private readonly _formBuilder: FormBuilder,
    private readonly listgodsRepository :ListGodsRepository) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      nivel: [null],
      progenitor: [null],
      grupo: [null]
    });
  }
}
