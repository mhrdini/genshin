import { ID_SHENHE, SHENHE } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Shenhe: Character = {
  id: ID_SHENHE,
  name: SHENHE,

  weaponType: WeaponTypes.Polearm,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Cryo,
}

export default Shenhe
