import { ALBEDO, ID_ALBEDO } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Albedo: Character = {
  id: ID_ALBEDO,
  name: ALBEDO,

  weaponType: WeaponTypes.Sword,
  rating: 5,
  role: CharacterRoles.SubDPS,
  element: Elements.Geo,
}

export default Albedo
