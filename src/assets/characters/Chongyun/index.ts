import { CHONGYUN, ID_CHONGYUN } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Chongyun: Character = {
  id: ID_CHONGYUN,
  name: CHONGYUN,

  weaponType: WeaponTypes.Claymore,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Cryo,
}

export default Chongyun
