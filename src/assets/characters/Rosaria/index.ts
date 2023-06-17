import { ID_ROSARIA, ROSARIA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Rosaria: Character = {
  id: ID_ROSARIA,
  name: ROSARIA,

  weaponType: WeaponTypes.Polearm,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Cryo,
}

export default Rosaria
