import { Injectable } from "@angular/core";
import { God } from "../features/interfaces/god.interface";
import { ListGods } from "../features/interfaces/list-gods.interface";

@Injectable({
  providedIn: 'root'
})

export class ListGodsRepository {

  constructor() { }

  public gods: Array<God> = [
    {
      name: {
        grego: 'error',
        romano: 'error'
      },
      vida: 0,
      mana: 0,
      attr: 0
    },
    {
      name: {
        grego: 'indefinido',
        romano: 'indefinido'
      },
      vida: 3,
      mana: 3,
      attr: 0
    },
    {
      name: {
        grego: 'zeus',
        romano: 'jupiter'
      },
      vida: 8,
      mana: 6,
      attr: 0
    },
    {
      name: {
        grego: 'poseidon',
        romano: 'netuno'
      },
      vida: 8,
      mana: 6,
      attr: 0
    },
    {
      name: {
        grego: 'hades',
        romano: 'plutao'
      },
      vida: 5,
      mana: 9,
      attr: 0
    },
    {
      name: {
        grego: 'demeter',
        romano: 'ceres'
      },
      vida: 5,
      mana: 7,
      attr: 0
    },
    {
      name: {
        grego: 'ares',
        romano: 'marte'
      },
      vida: 9,
      mana: 3,
      attr: 0
    },
    {
      name: {
        grego: 'atena',
        romano: 'atena'
      },
      vida: 7,
      mana: 5,
      attr: 0
    },
    {
      name: {
        grego: 'apolo',
        romano: 'febo'
      },
      vida: 4,
      mana: 8,
      attr: 0
    },
    {
      name: {
        grego: 'hefesto',
        romano: 'vulcano'
      },
      vida: 6,
      mana: 6,
      attr: 0
    },
    {
      name: {
        grego: 'afradite',
        romano: 'venus'
      },
      vida: 5,
      mana: 7,
      attr: 0
    },
    {
      name: {
        grego: 'hermes',
        romano: 'mercurio'
      },
      vida: 6,
      mana: 6,
      attr: 0
    },
    {
      name: {
        grego: 'dionisio',
        romano: 'baco'
      },
      vida: 6,
      mana: 6,
      attr: 0
    },
    {
      name: {
        grego: 'satiros',
        romano: 'faunos'
      },
      vida: 5,
      mana: 7,
      attr: 0
    },
    {
      name: {
        grego: 'hypnos',
        romano: 'somnus'
      },
      vida: 4,
      mana: 8,
      attr: 0
    },
    {
      name: {
        grego: 'hecate',
        romano: 'magia'
      },
      vida: 3,
      mana: 9,
      attr: 0
    },
    {
      name: {
        grego: 'phobos',
        romano: 'timmor'
      },
      vida: 4,
      mana: 8,
      attr: 0
    },
    {
      name: {
        grego: 'belona',
        romano: 'belona'
      },
      vida: 7,
      mana: 5,
      attr: 0
    },
    {
      name: {
        grego: 'iris',
        romano: 'arcus'
      },
      vida: 5,
      mana: 7,
      attr: 0
    },
  ]

  public groups: Array<God> = [
    {
      name: {
        grego: 'nenhum',
        romano: 'nenhum'
      },
      vida: 0,
      mana: 0,
      attr: 0
    },
    {
      name: {
        grego: 'hera',
        romano: 'juno'
      },
      vida: 2,
      mana: 3,
      attr: 0
    },
    {
      name: {
        grego: 'artemis',
        romano: 'artemis'
      },
      vida: 2,
      mana: 3,
      attr: 0
    },
    {
      name: {
        grego: 'artemismortal',
        romano: 'artemismortal'
      },
      vida: 5,
      mana: 12,
      attr: 0
    },
    {
      name: {
        grego: 'hestia',
        romano: 'vesta'
      },
      vida: 1,
      mana: 4,
      attr: 0
    },
    {
      name: {
        grego: 'tanatos',
        romano: 'mors'
      },
      vida: 2,
      mana: 3,
      attr: 0
    },
    {
      name: {
        grego: 'pa',
        romano: 'pan'
      },
      vida: 3,
      mana: 2,
      attr: 0
    },
    {
      name: {
        grego: 'heracles',
        romano: 'hercules'
      },
      vida: 4,
      mana: 1,
      attr: 0
    },
    {
      name: {
        grego: 'turtur',
        romano: 'turtur'
      },
      vida: 4,
      mana: 1,
      attr: 0
    },
    {
      name: {
        grego: 'aquila',
        romano: 'aquila'
      },
      vida: 3,
      mana: 2,
      attr: 0
    },
    {
      name: {
        grego: 'corvus',
        romano: 'corvus'
      },
      vida: 1,
      mana: 4,
      attr: 0
    },
    {
      name: {
        grego: 'eris',
        romano: 'discordia'
      },
      vida: 1,
      mana: 4,
      attr: 0
    },
    {
      name: {
        grego: 'amazonas',
        romano: 'amazonas'
      },
      vida: 3,
      mana: 2,
      attr: 0
    },
    {
      name: {
        grego: 'selene',
        romano: 'luna'
      },
      vida: 1,
      mana: 4,
      attr: 0
    },
    {
      name: {
        grego: 'ceos',
        romano: 'ceos'
      },
      vida: 2,
      mana: 3,
      attr: 0
    }
  ]

  public listNamesGod: Array<any> = [
    {
      letter: 'A',
      names: ['Ares', 'Atena', 'Apolo', 'Afradite', 'Arcus', 'Artemis', 'Artemis Mortal', 'Aquila', 'Amazonas']
    }, {
    letter: 'B',
    names: ['Baco', 'Belona']
    }, {
    letter: 'C',
    names: ['Ceres', 'Corvus', 'Ceos']
  }, {
    letter: 'D',
    names: ['Demeter', 'Dionisio', 'Discordia']
  }, {
    letter: 'E',
    names: ['Eris']
  }, {
    letter: 'F',
    names: ['Febo', 'Faunos']
  }, {
    letter: 'H',
    names: ['Hades', 'Hefesto', 'Hermes', 'Hypnos', 'Hecate', 'Hera', 'Hestia', 'Heracles', 'Hercules']
  }, {
    letter: 'I',
    names: ['Indefinido', 'Iris']
  }, {
    letter: 'J',
    names: ['Jupiter', 'Juno']
  }, {
    letter: 'L',
    names: ['Luna']
  }, {
    letter: 'M',
    names: ['Marte', 'Mercurio', 'Magia', 'Mors']
  }, {
    letter: 'N',
    names: ['Netuno']
  }, {
    letter: 'P',
    names: ['Poseidon', 'Plutao', 'Phobos', 'Pã', 'Pan']
}, {
    letter: 'S',
    names: ['Satiros', 'Somnus', 'Selene']
}, {
    letter: 'T',
    names: ['Timmor', 'Tanatos', 'Turtur']
}, {
    letter: 'V',
    names: ['Vulcano', 'Venus', 'Vesta']
  }, {
    letter: 'Z',
    names: ['Zeus']
  }]

  public listNamesGroup: Array<any> = [
    {
      letter: 'A',
      names: ['Ares', 'Atena', 'Apolo', 'Afradite', 'Arcus', 'Artemis', 'Artemis Mortal', 'Aquila', 'Amazonas']
    }, {
    letter: 'B',
    names: ['Baco', 'Belona']
    }, {
    letter: 'C',
    names: ['Ceres', 'Corvus', 'Ceos']
  }, {
    letter: 'D',
    names: ['Demeter', 'Dionisio', 'Discordia']
  }, {
    letter: 'E',
    names: ['Eris']
  }, {
    letter: 'F',
    names: ['Febo', 'Faunos']
  }, {
    letter: 'H',
    names: ['Hades', 'Hefesto', 'Hermes', 'Hypnos', 'Hecate', 'Hera', 'Hestia', 'Heracles', 'Hercules']
  }, {
    letter: 'I',
    names: ['Indefinido', 'Iris']
  }, {
    letter: 'J',
    names: ['Jupiter', 'Juno']
  }, {
    letter: 'L',
    names: ['Luna']
  }, {
    letter: 'M',
    names: ['Marte', 'Mercurio', 'Magia', 'Mors']
  }, {
    letter: 'N',
    names: ['Netuno']
  }, {
    letter: 'P',
    names: ['Poseidon', 'Plutao', 'Phobos', 'Pã', 'Pan']
}, {
    letter: 'S',
    names: ['Satiros', 'Somnus', 'Selene']
}, {
    letter: 'T',
    names: ['Timmor', 'Tanatos', 'Turtur']
}, {
    letter: 'V',
    names: ['Vulcano', 'Venus', 'Vesta']
  }, {
    letter: 'Z',
    names: ['Zeus']
  }]
}
