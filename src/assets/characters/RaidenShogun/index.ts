import { ID_RAIDEN_SHOGUN, RAIDEN_SHOGUN } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const RaidenShogun: Character = {
  id: ID_RAIDEN_SHOGUN,
  name: RAIDEN_SHOGUN,

  weaponType: WeaponTypes.Polearm,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Electro,
}

export default RaidenShogun
