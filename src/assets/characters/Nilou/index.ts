import { ID_NILOU, NILOU } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Nilou: Character = {
  id: ID_NILOU,
  name: NILOU,

  weaponType: WeaponTypes.Sword,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Hydro,
}

export default Nilou
