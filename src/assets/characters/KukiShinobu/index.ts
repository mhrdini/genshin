import { ID_KUKI_SHINOBU, KUKI_SHINOBU } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const KukiShinobu: Character = {
  id: ID_KUKI_SHINOBU,
  name: KUKI_SHINOBU,

  weaponType: WeaponTypes.Sword,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Electro,
}

export default KukiShinobu
