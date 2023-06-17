import { ID_QIQI, QIQI } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Qiqi: Character = {
  id: ID_QIQI,
  name: QIQI,

  weaponType: WeaponTypes.Sword,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Cryo,
}

export default Qiqi
