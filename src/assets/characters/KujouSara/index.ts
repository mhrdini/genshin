import { ID_KUJOU_SARA, KUJOU_SARA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const KujouSara: Character = {
  id: ID_KUJOU_SARA,
  name: KUJOU_SARA,

  weaponType: WeaponTypes.Bow,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Electro,
}

export default KujouSara
