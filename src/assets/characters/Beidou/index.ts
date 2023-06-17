import { BEIDOU, ID_BEIDOU } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Beidou: Character = {
  id: ID_BEIDOU,
  name: BEIDOU,

  weaponType: WeaponTypes.Claymore,
  rating: 4,
  role: CharacterRoles.SubDPS,
  element: Elements.Electro,
}

export default Beidou
