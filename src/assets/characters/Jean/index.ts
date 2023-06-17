import { ID_JEAN, JEAN } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Jean: Character = {
  id: ID_JEAN,
  name: JEAN,

  weaponType: WeaponTypes.Sword,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Anemo,
}

export default Jean
