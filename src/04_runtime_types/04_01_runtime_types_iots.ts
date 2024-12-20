import { getTodos } from '../http/client'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'
import { NonEmptyString, nonEmptyArray } from 'io-ts-types'
import { failure } from 'io-ts/PathReporter'

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
 * 1. Try changing `t.array(TodoItem).decode` to `nonEmptyArray(TodoItem).decode`. What will happen in case
 *    `getTodos()` returns an empty array (for both cases)?
 * 2. What is the use of `TodoItem.encode`?
 *
 * <<alternatives>>
 * - valibot https://valibot.dev/
 * - typebox https://github.com/sinclairzx81/typebox
 *
 * <<summary>>
 *
 * Valibot has a nice explanation on their website, more or less applicable to all such tools:
 *
 * "The core function of Valibot is to create a schema that describes a structured data set.
 * A schema can be compared to a type definition in TypeScript. The big difference is that
 * TypeScript types are 'not executed' and are more or less a DX feature. A schema on the
 * other hand, apart from the inferred type definition, can also be executed at runtime to
 * guarantee type safety of unknown data."
 */
