import { Character } from '../components'
import { characterModel } from '../database/models/character-models'
import { Classes, Flag } from '../enums'
import { DuplicatedUsernameException } from '../exceptions/duplicated-character'
import { ICharacter } from '../interfaces/character-interface'

export class HeroService {
  public characters: Character[] = []

  public logAllCharacters(): void {
    return this.characters.forEach((hero) => console.log(hero))
  }

  public logFlags(flag: Flag): Character[] {
    return this.characters.filter((hero) =>
      hero.options.flag != flag ? null : JSON.stringify(hero, null, 4)
    )
  }

  public logSpecificClass(heroType: Classes): void {
    console.log(
      this.characters.filter((hero) => (hero.classes != heroType ? null : JSON.stringify(hero)))
    )
  }

  public async createCharacter(character: Character): Promise<ICharacter> {
    const isCharacterExists = await characterModel.findOne({ name: character.options.name })

    if (isCharacterExists) {
      throw new DuplicatedUsernameException()
    }
    return characterModel.create({ ...character.options })
  }
}
