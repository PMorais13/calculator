import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { God } from 'src/app/features/interfaces/god.interface';
import { ListGodsRepository } from 'src/app/repository/list-gods.repository';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy{
  @Input()
  public set form(form: FormGroup) {
    this.level = form.controls.nivel.value;
    this.god = this.getGod(form.controls?.progenitor.value);
    this.group = this.getGod(form.controls.grupo.value);
  }
  public result: any;
  private level!: number;
  private god!: God;
  private group!: God;

  constructor(private readonly listGodsRepository: ListGodsRepository) { }

  ngOnInit() {
    this.calcPoints();
  }

  ngOnDestroy() {
    console.log('foi destruido');
  }

  /**
   * metodo responsável por calcular os pontos de acordo com as variáveis recebidas
   */
  public calcPoints(): void {

    this.result = {
      totalLife: this.hpOrManaTotal(this.god.vida, this.group.vida),
      totalMana: this.hpOrManaTotal(this.god.mana, this.group.mana)
    }
  }

  /**
   * metodo responsável por achar o Deus digitado pelo user na lista de deuses
   * @param param deus digitado pelo user
   * @returns deus selecionado
   */
  public getGod(param: string): God {
    if (!param) {
      param = 'error';
    }
    const progenitor = param.trim().toLowerCase();
    return this.listGodsRepository.gods.find(param => param.name.grego === progenitor || param.name.romano === progenitor) || this.listGodsRepository.gods[0] ;
  }

  /**
   * metodo responsável por calcular quanto de vida o user irá ganhar por nível de acordo com o Deus
   */
  public hpOrManaPerLvlGod(param: number): number {
    if (!param || this.level === 1){
      return 0
    }
    const hpTotal = param * (this.level - 1);
    return hpTotal;
  }

  /**
   * metodo responsável por dizer a quantidade de vida e energia que o jogador quando em determinados níveis
   * @returns quantidade de vida ou energia
   */
  public hpOrManaPerLvl(): number {
    if (this.level < 10){
      return 0
    }
    if(this.level >= 10 && this.level <=14){
      return 20;
    }
    else if(this.level >= 15 && this.level <=19){
      return 50;
    }
    else if(this.level >= 20 && this.level <=24){
      return 90;
    }
    else if(this.level >= 25 && this.level <=24){
      return 130;
    }
    else if(this.level >= 25 && this.level <=30){
      return 230;
    } else {
      return 0
    }
  }

  /**
   * metodo que soma o hp total
   */
  public hpOrManaTotal(god: number, group: number): number {
    const lifeOrMana = 100;
    return lifeOrMana + this.hpOrManaPerLvlGod(god) + this.hpOrManaPerLvlGod(group) + this.hpOrManaPerLvl();
  }
}
