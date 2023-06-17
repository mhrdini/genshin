import { ID_RAZOR, RAZOR } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Razor: Character = {
  id: ID_RAZOR,
  name: RAZOR,

  weaponType: WeaponTypes.Claymore,
  rating: 4,
  role: CharacterRoles.MainDPS,
  element: Elements.Electro,
}

export default Razor
