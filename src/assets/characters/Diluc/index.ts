import { DILUC, ID_DILUC } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Diluc: Character = {
  id: ID_DILUC,
  name: DILUC,

  weaponType: WeaponTypes.Claymore,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Pyro,
}

export default Diluc
