import { ID_YELAN, YELAN } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Yelan: Character = {
  id: ID_YELAN,
  name: YELAN,

  weaponType: WeaponTypes.Bow,
  rating: 5,
  role: CharacterRoles.SubDPS,
  element: Elements.Hydro,
}

export default Yelan
