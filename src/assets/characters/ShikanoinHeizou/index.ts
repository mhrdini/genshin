import {
  ID_SHIKANOIN_HEIZOU,
  SHIKANOIN_HEIZOU,
} from '@/assets/characters/constants'
import {
  type Character,
  CharacterRoles,
  Elements,
} from '@/assets/characters/types'
import { WeaponTypes } from '@/assets/weapons/types'

const ShikanoinHeizou: Character = {
  id: ID_SHIKANOIN_HEIZOU,
  name: SHIKANOIN_HEIZOU,

  weaponType: WeaponTypes.Catalyst,
  rating: 4,
  role: CharacterRoles.SubDPS,
  element: Elements.Anemo,
}

export default ShikanoinHeizou
