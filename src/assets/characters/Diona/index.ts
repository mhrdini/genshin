import { DIONA, ID_DIONA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Diona: Character = {
  id: ID_DIONA,
  name: DIONA,

  weaponType: WeaponTypes.Claymore,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Cryo,
}

export default Diona
