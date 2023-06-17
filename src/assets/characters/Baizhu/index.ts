import { BAIZHU, ID_BAIZHU } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Baizhu: Character = {
  id: ID_BAIZHU,
  name: BAIZHU,

  weaponType: WeaponTypes.Catalyst,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Dendro,
}

export default Baizhu
