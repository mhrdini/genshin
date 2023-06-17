import { ID_KIRARA, KIRARA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Kirara: Character = {
  id: ID_KIRARA,
  name: KIRARA,

  weaponType: WeaponTypes.Sword,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Dendro,
}

export default Kirara
