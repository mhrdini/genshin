import { ARATAKI_ITTO, ID_ARATAKI_ITTO } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const AratakiItto: Character = {
  id: ID_ARATAKI_ITTO,
  name: ARATAKI_ITTO,

  weaponType: WeaponTypes.Claymore,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Geo,
}

export default AratakiItto
