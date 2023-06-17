import { BARBARA, ID_BARBARA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Barbara: Character = {
  id: ID_BARBARA,
  name: BARBARA,

  weaponType: WeaponTypes.Catalyst,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Hydro,
}

export default Barbara
