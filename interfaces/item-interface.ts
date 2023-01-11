import { CharacterType } from '../enums'

export interface Iitem {
  name: string
  id: number
  characterType: CharacterType
  minLevel: number
  attackRate: number
  criticalChance: number
}
