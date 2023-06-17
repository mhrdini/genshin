import { ID_TIGHNARI, TIGHNARI } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Tighnari: Character = {
  id: ID_TIGHNARI,
  name: TIGHNARI,

  weaponType: WeaponTypes.Bow,
  rating: 5,
  role: CharacterRoles.SubDPS,
  element: Elements.Dendro,
}

export default Tighnari
