import { FISCHL, ID_FISCHL } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Fischl: Character = {
  id: ID_FISCHL,
  name: FISCHL,

  weaponType: WeaponTypes.Bow,
  rating: 4,
  role: CharacterRoles.SubDPS,
  element: Elements.Electro,
}

export default Fischl
