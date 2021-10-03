import { Component, Input, OnInit } from '@angular/core';
import { Attributes } from 'src/app/features/interfaces/atributos.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input()
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

  constructor() { }

  ngOnInit() {
  }
}
