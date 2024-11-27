// #region union to keys
/**
 * simple and most common example of type mapping
 */
type CurrencySymbol = 'EUR' | 'USD' | 'PLN'

export type Bank = {
  [C in CurrencySymbol]: number
}
// #endregion

// #region remapping properties' types
type Player = {
  id: string
  score: number[]
}

type MappedPlayer = {
  [prop in keyof Player]: Player[prop] extends string ? string : number
}
// #endregion

/**
 * read more: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 * in fact, only the first example is commonly used (constructing type's keys from union members)
 */
