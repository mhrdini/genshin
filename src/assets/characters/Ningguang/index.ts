import { ID_NINGGUANG, NINGGUANG } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Ningguang: Character = {
  id: ID_NINGGUANG,
  name: NINGGUANG,

  weaponType: WeaponTypes.Catalyst,
  rating: 4,
  role: CharacterRoles.MainDPS,
  element: Elements.Geo,
}

export default Ningguang
