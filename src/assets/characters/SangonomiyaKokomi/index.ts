import {
  ID_SANGONOMIYA_KOKOMI,
  SANGONOMIYA_KOKOMI,
} from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const SangonomiyaKokomi: Character = {
  id: ID_SANGONOMIYA_KOKOMI,
  name: SANGONOMIYA_KOKOMI,

  weaponType: WeaponTypes.Catalyst,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Hydro,
}

export default SangonomiyaKokomi
