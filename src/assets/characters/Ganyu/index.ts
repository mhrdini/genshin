import { GANYU, ID_GANYU } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Ganyu: Character = {
  id: ID_GANYU,
  name: GANYU,

  weaponType: WeaponTypes.Bow,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Cryo,
}

export default Ganyu
