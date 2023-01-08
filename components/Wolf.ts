import { Classes, Flag } from '../enums'
import { ICharacter } from '../interfaces/character-interface'
import { Character } from './index'

export class Wolf extends Character {
  public classes?: Classes

  constructor(public options: ICharacter) {
    super(options)
    this.classes = Classes.Wolf
  }
    this.classes = Classes.Wolf

}
