import { getTodos } from '../http/client'
import { z } from 'zod'

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
const TodoItem = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
})

type TodoItem = z.infer<typeof TodoItem>

// #endregion

// #region main
const main = async () => {
  const parsed = TodoItem.array().safeParse(await getTodos())

  if (parsed.success) {
    console.log(
      `successfully decoded an array of ${parsed.data.length} TodoItems!`,
    )
  } else {
    console.error(`An error occurred: ${parsed.error}`)
  }
}

main()
// #endregion

/**
 * <<exercises>>
 *
 * 1. What do you think - can runtime types be used only with TypeScript?
 * 2. Try changing `TodoItem.array()` to `TodoItem.array().nonempty()`. What will happen in case
 *    `getTodos()` returns an empty array (for both cases)?
 */
