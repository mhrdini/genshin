import { ID_THOMA, THOMA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Thoma: Character = {
  id: ID_THOMA,
  name: THOMA,

  weaponType: WeaponTypes.Polearm,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Pyro,
}

export default Thoma
