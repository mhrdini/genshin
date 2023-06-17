import { ID_YOIMIYA, YOIMIYA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Yoimiya: Character = {
  id: ID_YOIMIYA,
  name: YOIMIYA,

  weaponType: WeaponTypes.Bow,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Pyro,
}

export default Yoimiya
