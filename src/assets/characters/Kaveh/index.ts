import { ID_KAVEH, KAVEH } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Kaveh: Character = {
  id: ID_KAVEH,
  name: KAVEH,

  weaponType: WeaponTypes.Claymore,
  rating: 4,
  role: CharacterRoles.MainDPS,
  element: Elements.Dendro,
}

export default Kaveh
