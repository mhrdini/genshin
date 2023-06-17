import { ID_XIANGLING, XIANGLING } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Xiangling: Character = {
  id: ID_XIANGLING,
  name: XIANGLING,

  weaponType: WeaponTypes.Polearm,
  rating: 4,
  role: CharacterRoles.SubDPS,
  element: Elements.Pyro,
}

export default Xiangling
