import { ID_MIKA, MIKA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Mika: Character = {
  id: ID_MIKA,
  name: MIKA,

  weaponType: WeaponTypes.Polearm,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Cryo,
}

export default Mika
