import { ID_YUN_JIN, YUN_JIN } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const YunJin: Character = {
  id: ID_YUN_JIN,
  name: YUN_JIN,

  weaponType: WeaponTypes.Polearm,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Geo,
}

export default YunJin
