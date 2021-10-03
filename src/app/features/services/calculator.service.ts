import { Injectable } from "@angular/core";
import { ListGodsRepository } from "src/app/repository/list-gods.repository";
import { Attributes } from "../interfaces/atributos.interface";
import { God } from "../interfaces/god.interface";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: 'root'
})

export class CalculatorService {

  constructor(private readonly listGodsRepository: ListGodsRepository) { }

  public result: any;
  public attrPrimary: Array<Attributes> = [
    {
      name: 'CONS',
      attrLvl: 10,
      attrHabF: 10,
      attrHabV: 10,
      attrAcc: 10,
    },
    {
      name: 'FOR',
      attrLvl: 10,
      attrHabF: 10,
      attrHabV: 10,
      attrAcc: 10,
    },
    {
      name: 'MIR',
      attrLvl: 10,
      attrHabF: 10,
      attrHabV: 10,
      attrAcc: 10,
    },
    {
      name: 'AGI',
      attrLvl: 10,
      attrHabF: 10,
      attrHabV: 10,
      attrAcc: 10,
    },
    {
      name: 'INT',
      attrLvl: 10,
      attrHabF: 10,
      attrHabV: 10,
      attrAcc: 10,
    },
    {
      name: 'WIS',
      attrLvl: 10,
      attrHabF: 10,
      attrHabV: 10,
      attrAcc: 10,
    },
    {
      name: 'CHA',
      attrLvl: 10,
      attrHabF: 10,
      attrHabV: 10,
      attrAcc: 10,
    },
  ]
  public level!: number;
  private god!: God;
  private group!: God;
  private godOrGroup!: Array<God>;

  public nSeiMais(god: string): void {
    this.god = this.getGod(god, 'gods')
    this.group = this.getGod(god, 'groups')
  }

  /**
   * metodo responsável por achar o Deus digitado pelo user na lista de deuses
   * @god god deus digitado pelo user
   * @returns deus selecionado
   */
  public getGod(god: string, target: 'gods' | 'groups' = 'gods'): God {
    if (!god) {
      god = 'error';
    }

    this.godOrGroup = this.listGodsRepository[target]

    const progenitor = god.trim().toLowerCase();
    return this.godOrGroup.find(param => param.name.grego === progenitor || param.name.romano === progenitor) || this.listGodsRepository.gods[0];
  }

  /**
   * metodo responsável por calcular quanto de vida o user irá ganhar por nível de acordo com o Deus
   */
  public hpOrManaPerLvlGod(param: number): number {
    if (!param || this.level === 1) {
      return 0
    }
    const hpTotal = param * (this.level - 1);
    return hpTotal;
  }

  public hpOrManaPerLvl(): number {
    if (this.level < 10) {
      return 0
    }
    if (this.level >= 10 && this.level <= 14) {
      return 20;
    }
    else if (this.level >= 15 && this.level <= 19) {
      return 50;
    }
    else if (this.level >= 20 && this.level <= 24) {
      return 90;
    }
    else if (this.level >= 25 && this.level <= 24) {
      return 130;
    }
    else if (this.level >= 25 && this.level <= 30) {
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

  /**
 * metodo responsável por calcular os pontos de acordo com as variáveis recebidas
 */
  public calcPoints(): any {

    return this.result = {
      totalLife: this.hpOrManaTotal(this.god.vida, this.group.vida),
      totalMana: this.hpOrManaTotal(this.god.mana, this.group.mana)
    }
  }
}
