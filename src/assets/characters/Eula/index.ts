import { EULA, ID_EULA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Eula: Character = {
  id: ID_EULA,
  name: EULA,

  weaponType: WeaponTypes.Claymore,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Cryo,
}

export default Eula
