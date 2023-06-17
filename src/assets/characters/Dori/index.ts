import { DORI, ID_DORI } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Dori: Character = {
  id: ID_DORI,
  name: DORI,

  weaponType: WeaponTypes.Claymore,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Electro,
}

export default Dori
