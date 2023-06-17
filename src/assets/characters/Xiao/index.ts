import { ID_XIAO, XIAO } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Xiao: Character = {
  id: ID_XIAO,
  name: XIAO,

  weaponType: WeaponTypes.Polearm,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Anemo,
}

export default Xiao
