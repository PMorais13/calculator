import { Injectable } from "@angular/core";
import { God } from "../features/interfaces/god.interface";

@Injectable({
  providedIn: 'root'
})

export class ListGodsRepository {

  constructor() { }

  public gods: Array<God> = [
    {
      name: 'indefinido',
      vida: 3,
      mana: 3,
      attr: 0
    },
    {
      name: 'zeus',
      vida: 8,
      mana: 6,
      attr: 0
    },
    {
      name: 'poseidon',
      vida: 8,
      mana: 6,
      attr: 0
    },
    {
      name: 'hades',
      vida: 5,
      mana: 9,
      attr: 0
    },
    {
      name: 'demeter',
      vida: 5,
      mana: 7,
      attr: 0
    },
    {
      name: 'ares',
      vida: 9,
      mana: 3,
      attr: 0
    },
    {
      name: 'atena',
      vida: 7,
      mana: 5,
      attr: 0
    },
    {
      name: 'apolo',
      vida: 4,
      mana: 8,
      attr: 0
    },
    {
      name: 'hefesto',
      vida: 6,
      mana: 6,
      attr: 0
    },
    {
      name: 'afrodite',
      vida: 5,
      mana: 7,
      attr: 0
    },
    {
      name: 'hermes',
      vida: 6,
      mana: 6,
      attr: 0
    },
    {
      name: 'dionisio',
      vida: 6,
      mana: 6,
      attr: 0
    },
    {
      name: 'satiros',
      vida: 5,
      mana: 7,
      attr: 0
    },
    {
      name: 'hypnos',
      vida: 4,
      mana: 8,
      attr: 0
    },
    {
      name: 'hecate',
      vida: 3,
      mana: 9,
      attr: 0
    },
    {
      name: 'quione',
      vida: 4,
      mana: 8,
      attr: 0
    },
    {
      name: 'phobos',
      vida: 4,
      mana: 8,
      attr: 0
    },
    {
      name: 'belona',
      vida: 7,
      mana: 5,
      attr: 0
    },
    {
      name: 'iris',
      vida: 5,
      mana: 7,
      attr: 0
    },
  ]

  public group: Array<God> = [
    {
      name: 'nenhum',
      vida: 0,
      mana: 0,
      attr: 0
    },
    {
      name: 'hera',
      vida: 2,
      mana: 3,
      attr: 0
    },
    {
      name: 'artemis',
      vida: 2,
      mana: 3,
      attr: 0
    },
    {
      name: 'artemisMortal',
      vida: 5,
      mana: 12,
      attr: 0
    },
    {
      name: 'hestia',
      vida: 1,
      mana: 4,
      attr: 0
    },
    {
      name: 'tanatos',
      vida: 2,
      mana: 3,
      attr: 0
    },
    {
      name: 'pa',
      vida: 3,
      mana: 2,
      attr: 0
    },
    {
      name: 'heracles',
      vida: 4,
      mana: 1,
      attr: 0
    },
    {
      name: 'turtur',
      vida: 4,
      mana: 1,
      attr: 0
    },
    {
      name: 'aquila',
      vida: 3,
      mana: 2,
      attr: 0
    },
    {
      name: 'corvus',
      vida: 1,
      mana: 4,
      attr: 0
    },
    {
      name: 'eris',
      vida: 1,
      mana: 4,
      attr: 0
    },
    {
      name: 'amazonas',
      vida: 3,
      mana: 2,
      attr: 0
    },
    {
      name: 'selene',
      vida: 1,
      mana: 4,
      attr: 0
    },
    {
      name: 'ceos',
      vida: 2,
      mana: 3,
      attr: 0
    }
  ]
}
