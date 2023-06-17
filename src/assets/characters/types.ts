import type { WeaponType } from '@/assets/weapons/types'

export enum Elements {
  Anemo = 'Anemo',
  Cryo = 'Cryo',
  Dendro = 'Dendro',
  Electro = 'Electro',
  Geo = 'Geo',
  Hydro = 'Hydro',
  Pyro = 'Pyro',
}

export type CharacterRating = 4 | 5

export enum CharacterRoles {
  MainDPS = 'Main DPS',
  SubDPS = 'Sub DPS',
  Support = 'Support',
}

export type CharacterImageData = {
  banner: string
  bar: string
  burst: string
  constellation1: string
  constellation2: string
  constellation3: string
  constellation4: string
  constellation5: string
  constellation6: string
  icon: string
  iconSide: string
  passive1: string
  passive2: string
  passive3: string
  skill: string
}

export type Character = {
  id: string
  name: string
  weaponType: WeaponType
  rating: CharacterRating
  role: CharacterRoles
  element: Elements
}
