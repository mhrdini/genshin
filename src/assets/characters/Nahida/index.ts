import { ID_NAHIDA, NAHIDA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Nahida: Character = {
  id: ID_NAHIDA,
  name: NAHIDA,

  weaponType: WeaponTypes.Catalyst,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Dendro,
}

export default Nahida
