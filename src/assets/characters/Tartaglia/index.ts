import { ID_TARTAGLIA, TARTAGLIA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Tartaglia: Character = {
  id: ID_TARTAGLIA,
  name: TARTAGLIA,

  weaponType: WeaponTypes.Bow,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Hydro,
}

export default Tartaglia
