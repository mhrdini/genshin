import {
  ID_KAEDEHARA_KAZUHA,
  KAEDEHARA_KAZUHA,
} from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const KaedeharaKazuha: Character = {
  id: ID_KAEDEHARA_KAZUHA,
  name: KAEDEHARA_KAZUHA,

  weaponType: WeaponTypes.Sword,
  rating: 5,
  role: CharacterRoles.Support,
  element: Elements.Anemo,
}

export default KaedeharaKazuha
