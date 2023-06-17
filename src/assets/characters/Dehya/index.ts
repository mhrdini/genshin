import { DEHYA, ID_DEHYA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Dehya: Character = {
  id: ID_DEHYA,
  name: DEHYA,

  weaponType: WeaponTypes.Claymore,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Pyro,
}

export default Dehya
