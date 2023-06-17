import { ID_YAOYAO, YAOYAO } from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const Yaoyao: Character = {
  id: ID_YAOYAO,
  name: YAOYAO,

  weaponType: WeaponTypes.Polearm,
  rating: 4,
  role: CharacterRoles.Support,
  element: Elements.Dendro,
}

export default Yaoyao
