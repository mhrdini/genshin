import { HU_TAO, ID_HU_TAO } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const HuTao: Character = {
  id: ID_HU_TAO,
  name: HU_TAO,

  weaponType: WeaponTypes.Polearm,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Pyro,
}

export default HuTao
