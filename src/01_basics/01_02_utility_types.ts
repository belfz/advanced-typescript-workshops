type Person = {
  name: string
  birth: Date
  isEmployed: boolean
}

// #region Pick
type BaseInfoWithPick = Pick<Person, 'name' | 'birth'>
// #endregion

// #region Omit
type BaseInfoWithOmit = Omit<Person, 'isEmployed'>
// #endregion

// #region Readonly
const dude: Readonly<Person> = {
  name: 'Dude',
  birth: new Date('1990-12-01'),
  isEmployed: true,
}

/**
 * mutating the object becomes illegal:
 * TS2540: Cannot assign to 'name' because it is a read-only property.
 */
// dude.name = 'nope'
// #endregion

// #region ReadonlyArray
const numbers: ReadonlyArray<number> = [1, 2, 3]

/**
 * Array's methods mutating in-place (like 'push') are now not available:
 */
// numbers.push()
// #endregion

/**
 * <<exercises>>
 * 1. What do you think: is it better to use Pick or Omit?
 *
 * more about utility types:
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 */
