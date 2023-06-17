import {
  ID_KAMISATO_AYATO,
  KAMISATO_AYATO,
} from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const KamisatoAyato: Character = {
  id: ID_KAMISATO_AYATO,
  name: KAMISATO_AYATO,

  weaponType: WeaponTypes.Sword,
  rating: 5,
  role: CharacterRoles.MainDPS,
  element: Elements.Hydro,
}

export default KamisatoAyato
