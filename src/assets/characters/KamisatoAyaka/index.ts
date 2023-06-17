import {
  ID_KAMISATO_AYAKA,
  KAMISATO_AYAKA,
} from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const KamisatoAyaka: Character = {
  id: ID_KAMISATO_AYAKA,
  name: KAMISATO_AYAKA,

  weaponType: WeaponTypes.Sword,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Cryo,
}

export default KamisatoAyaka
