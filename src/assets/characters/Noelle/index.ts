import { ID_NOELLE, NOELLE } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Noelle: Character = {
  id: ID_NOELLE,
  name: NOELLE,

  weaponType: WeaponTypes.Claymore,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Geo,
}

export default Noelle
