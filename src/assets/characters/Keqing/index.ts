import { ID_KEQING, KEQING } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Keqing: Character = {
  id: ID_KEQING,
  name: KEQING,

  weaponType: WeaponTypes.Sword,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Electro,
}

export default Keqing
