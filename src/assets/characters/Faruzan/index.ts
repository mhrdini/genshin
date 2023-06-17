import { FARUZAN, ID_FARUZAN } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Faruzan: Character = {
  id: ID_FARUZAN,
  name: FARUZAN,

  weaponType: WeaponTypes.Bow,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Anemo,
}

export default Faruzan
