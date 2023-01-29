export type Character = {
  id: number,
  name: string,
  interpreted_by: number,
  specie: number,
  status: string,
  victims_count: number
}

export type CharacterInput = Omit<Character, "id">

export type Actor = {
  id: number,
  name: string,
  age: number,
  nationality: string
}