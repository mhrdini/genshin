import { ID_VENTI, VENTI } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Venti: Character = {
  id: ID_VENTI,
  name: VENTI,

  weaponType: WeaponTypes.Bow,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Dendro,
}

export default Venti
