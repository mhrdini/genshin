import { ALHAITHAM, ID_ALHAITHAM } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Alhaitham: Character = {
  id: ID_ALHAITHAM,
  name: ALHAITHAM,

  weaponType: WeaponTypes.Sword,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Dendro,
}

export default Alhaitham
