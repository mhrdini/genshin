import { ID_YANFEI, YANFEI } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Yanfei: Character = {
  id: ID_YANFEI,
  name: YANFEI,

  weaponType: WeaponTypes.Catalyst,
  rating: 4,
  role: CharacterRoles.MainDPS,
  element: Elements.Pyro,
}

export default Yanfei
