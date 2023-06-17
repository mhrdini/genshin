import { ID_YAE_MIKO, YAE_MIKO } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const YaeMiko: Character = {
  id: ID_YAE_MIKO,
  name: YAE_MIKO,

  weaponType: WeaponTypes.Catalyst,
  rating: 5,
  role: CharacterRoles.SubDPS,
  element: Elements.Electro,
}

export default YaeMiko
