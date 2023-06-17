import { AMBER, ID_AMBER } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Amber: Character = {
  id: ID_AMBER,
  name: AMBER,

  weaponType: WeaponTypes.Bow,
  rating: 4,
  role: CharacterRoles.SubDPS,
  element: Elements.Pyro,
}

export default Amber
