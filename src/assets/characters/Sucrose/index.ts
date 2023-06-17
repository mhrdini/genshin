import { ID_SUCROSE, SUCROSE } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Sucrose: Character = {
  id: ID_SUCROSE,
  name: SUCROSE,

  weaponType: WeaponTypes.Catalyst,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Anemo,
}

export default Sucrose
