import { ALOY, ID_ALOY } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Aloy: Character = {
  id: ID_ALOY,
  name: ALOY,

  weaponType: WeaponTypes.Bow,
  rating: 5,
  role: CharacterRoles.SubDPS,
  element: Elements.Cryo,
}

export default Aloy
