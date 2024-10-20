import { getTodos } from './http/client'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'
import { NonEmptyString } from 'io-ts-types'

const TodoItem = t.type({
  userId: t.Int,
  id: t.Int,
  title: NonEmptyString,
  completed: t.boolean,
})

interface TodoItem extends t.TypeOf<typeof TodoItem> {}

const main = async () => {
  pipe(
    await getTodos(),
    t.array(TodoItem).decode,
    E.match(
      (left) => {
        console.error(`an error occurred: ${left}`)
      },
      (right) => {
        console.info(
          `successfully decoded an array of ${right.length} TodoItems`,
        )
      },
      // TODO how to catch errors from the http client?
    ),
  )
}

await main()
