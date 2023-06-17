import { ID_SAYU, SAYU } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Sayu: Character = {
  id: ID_SAYU,
  name: SAYU,

  weaponType: WeaponTypes.Claymore,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Anemo,
}

export default Sayu
