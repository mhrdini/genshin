import { ID_LISA, LISA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Lisa: Character = {
  id: ID_LISA,
  name: LISA,

  weaponType: WeaponTypes.Catalyst,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Electro,
}

export default Lisa
