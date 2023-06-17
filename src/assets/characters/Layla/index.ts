import { ID_LAYLA, LAYLA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Layla: Character = {
  id: ID_LAYLA,
  name: LAYLA,

  weaponType: WeaponTypes.Sword,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Hydro,
}

export default Layla
