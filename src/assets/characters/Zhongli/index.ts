import { ID_ZHONGLI, ZHONGLI } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Zhongli: Character = {
  id: ID_ZHONGLI,
  name: ZHONGLI,

  weaponType: WeaponTypes.Polearm,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Geo,
}

export default Zhongli
