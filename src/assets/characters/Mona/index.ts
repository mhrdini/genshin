import { ID_KLEE, KLEE } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Klee: Character = {
  id: ID_KLEE,
  name: KLEE,

  weaponType: WeaponTypes.Catalyst,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Hydro,
}

export default Klee
