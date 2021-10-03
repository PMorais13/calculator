import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ListGodsRepository } from 'src/app/repository/list-gods.repository';
import { God } from '../../interfaces/god.interface';
import { StorageService } from '../../services/storage.service';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { CalculatorService } from '../../services/calculator.service';
import { Observable } from 'rxjs/internal/Observable';

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

/**
 * @title Stepper with editable steps
 */
@Component({
  selector: 'app-calculadora',
  templateUrl: 'calculadora.component.html',
  styleUrls: ['calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {

  public stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  public form: FormGroup = new FormGroup({});
  public atributos: number = 0;
  public god: God | undefined;
  public gods: Array<God> = this.listgodsRepository.gods;
  public result!: any;
  public stateListGod!: Observable<any[]>;
  public stateListGroup!: Observable<any[]>;
  public listNameGods: any[] = this.listGodsRepository.listNamesGod;
  public listNameGroup: any[] = this.listGodsRepository.listNamesGod;

  constructor(private readonly _formBuilder: FormBuilder,
    private readonly listgodsRepository :ListGodsRepository,
    private readonly calculatorService: CalculatorService,
    private readonly listGodsRepository: ListGodsRepository
    ) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      level: [null, [Validators.minLength(1)]],
      god: [null],
      group: [null]
    });

    this.stateListGod = this.form.controls.god.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterListGod(value))
      );

    this.stateListGroup = this.form.controls.group.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterListGroup(value))
      );

    this.listnerFormInputChanges();
  }

  /**
   * envia as informações do form pro storage
   */
  // public submit(): void {
  //   console.log('foi')
  //   Object.entries(this.form.getRawValue()).forEach(([key, value]) => {
  //     console.log(key, value);
  //     (this.storageService as any)[key] = value;
  //   });
  // }

  public calcAttr(): void {
    this.result = this.calculatorService.calcPoints();
  }

  private listnerFormInputChanges(): void {
    this.form.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.calculatorService.nSeiMais(this.form.controls.god.value);
      this.calculatorService.nSeiMais(this.form.controls.group.value);
      this.calculatorService.level = this.form.controls.level.value;
    });
  }

  private _filterListGod(value: string): any[] {
    if (value) {
      return this.listNameGods
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.listNameGods;
  }

  private _filterListGroup(value: string): any[] {
    if (value) {
      return this.listNameGods
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.listNameGods;
  }
}
