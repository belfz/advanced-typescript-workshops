import * as t from 'io-ts'
import { NonEmptyString } from 'io-ts-types'

// #region plain export
/**
 * In TS/JS, in contrast to Scala (2.x) or Java anything can be exported and imported.
 *
 * Unless you adopted the classes (either by convention or because of using a specific
 * framework), there's zero need to write e. g. your services as classes.
 */
export const SOME_CONSTANT_VALUE = 42

export const serviceFunction = (param: number, anotherParam: string) =>
  `doing important work with ${param} and ${anotherParam}`
// #endregion

// #region default export
const someRecord: Record<string, number> = {
  specialNumber: 55,
}

export default someRecord
// #endregion

// #region export const and type under the same key
/**
 * This is a 'runtime type'.
 * We'll talk about it in the lesson about runtime types.
 */
export const Player = t.type({
  name: NonEmptyString,
  score: t.Int,
})

export type Player = t.TypeOf<typeof Player>
// #endregion

/**
 * <<exercises>>
 *
 * 1. What is the the difference between 'export const ..' and 'export default ..'?
 * 2. How do you 'import' both? Create a file and try to import members of this file.
 * 3. What's 'import type ..'  and how to use it?
 */
