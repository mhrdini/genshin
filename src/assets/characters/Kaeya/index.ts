import { ID_KAEYA, KAEYA } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Kaeya: Character = {
  id: ID_KAEYA,
  name: KAEYA,

  weaponType: WeaponTypes.Sword,
  rating: 4,
  role: CharacterRoles.SubDPS,
  element: Elements.Cryo,
}

export default Kaeya
