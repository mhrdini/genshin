export type MaterialRating = 2 | 3 | 4 | 5

export enum MaterialType {
  Jewel = 'Jewel',
  ElementalStone = 'Elemental',
  Common = 'Common',
  Local = 'Local',
}

export type Material = {
  id: string
  name: string
  icon: string
  rarity: MaterialRating
  type: MaterialType
}
