import { COLLEI, ID_COLLEI } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Collei: Character = {
  id: ID_COLLEI,
  name: COLLEI,

  weaponType: WeaponTypes.Bow,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Dendro,
}

export default Collei
