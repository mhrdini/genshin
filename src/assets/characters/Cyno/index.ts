import { CYNO, ID_CYNO } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Cyno: Character = {
  id: ID_CYNO,
  name: CYNO,

  weaponType: WeaponTypes.Polearm,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Electro,
}

export default Cyno
