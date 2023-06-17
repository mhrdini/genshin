import { ID_WANDERER, WANDERER } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Wanderer: Character = {
  id: ID_WANDERER,
  name: WANDERER,

  weaponType: WeaponTypes.Catalyst,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Anemo,
}

export default Wanderer
