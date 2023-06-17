export enum WeaponTypes {
  Bow = 'Bow',
  Catalyst = 'Catalyst',
  Claymore = 'Claymore',
  Polearm = 'Polearm',
  Sword = 'Sword',
}

export type WeaponType = WeaponTypes

export type WeaponRating = 1 | 2 | 3 | 4 | 5

export type Weapon = {
  id: string
  name: string
  description: string
  type: WeaponType
  rating: WeaponRating
}
