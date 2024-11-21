import { getTodos } from '../http/client'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'
import { NonEmptyString, nonEmptyArray } from 'io-ts-types'
import { failure } from 'io-ts/PathReporter'

/**
 * "In C# or Java, it’s meaningful to think of a one-to-one correspondence between runtime types
 * and their compile-time declarations. In TypeScript, it’s better to think of a type as a set of
 * values that share something in common. Because types are just sets, a particular value can
 * belong to many sets at the same time.
 *
 * TypeScript’s type system is also not reified: There’s nothing at runtime that will tell us
 * that obj is Pointlike. In fact, the Pointlike type is not present in any form at runtime."
 *
 * https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html#types-as-sets
 */

// #region compile-time types
/**
 * this type does not exist in runtime!
 */
type TodoItem_ = {
  userId: number
  id: number
  title: string
  completed: boolean
}
// #endregion

// #region runtime types
const TodoItem = t.type({
  userId: t.Int,
  id: t.Int,
  title: NonEmptyString,
  completed: t.boolean,
})

type TodoItem = t.TypeOf<typeof TodoItem>

/**
 * custom typeguard
 */
TodoItem.is({ something: 'not a TodoItem!' })
// #endregion

// #region main
const main = async () => {
  pipe(
    await getTodos(),
    t.array(TodoItem).decode,
    E.match(
      (left) => console.error(`An error occurred: ${failure(left)}`),
      (right) => {
        console.info(
          `successfully decoded an array of ${right.length} TodoItems!`,
        )
      },
    ),
  )
}

main()
// #endregion

/**
 * <<exercises>>
 *
 * 1. What do you think - can runtime types be used only with TypeScript?
 * 2. Try changing `t.array(TodoItem).decode` to `nonEmptyArray(TodoItem).decode`. What will happen in case
 *    `getTodos()` returns an empty array (for both cases)?
 * 3. What is the use of `TodoItem.encode`?
 */
