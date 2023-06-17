import { ID_XINYAN, XINYAN } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Xinyan: Character = {
  id: ID_XINYAN,
  name: XINYAN,

  weaponType: WeaponTypes.Claymore,
  rating: 4,
  role: CharacterRoles.MainDPS,
  element: Elements.Pyro,
}

export default Xinyan
