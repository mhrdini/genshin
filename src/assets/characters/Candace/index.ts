import { CANDACE, ID_CANDACE } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Candace: Character = {
  id: ID_CANDACE,
  name: CANDACE,

  weaponType: WeaponTypes.Sword,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Hydro,
}

export default Candace
