import { ID_XINGQIU, XINGQIU } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Xingqiu: Character = {
  id: ID_XINGQIU,
  name: XINGQIU,

  weaponType: WeaponTypes.Sword,
  rating: 4,
  role: CharacterRoles.SubDPS,
  element: Elements.Hydro,
}

export default Xingqiu
