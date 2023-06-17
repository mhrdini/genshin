import { BENNETT, ID_BENNETT } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Bennett: Character = {
  id: ID_BENNETT,
  name: BENNETT,

  weaponType: WeaponTypes.Sword,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Pyro,
}

export default Bennett
