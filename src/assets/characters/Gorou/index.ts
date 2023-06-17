import { GOROU, ID_GOROU } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Gorou: Character = {
  id: ID_GOROU,
  name: GOROU,

  weaponType: WeaponTypes.Bow,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Geo,
}

export default Gorou
