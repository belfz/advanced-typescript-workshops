import { getTodos } from './http/client'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'
import { NonEmptyString } from 'io-ts-types'
import { failure } from 'io-ts/PathReporter'

const TodoItem = t.type({
  userId: t.Int,
  id: t.Int,
  title: NonEmptyString,
  completed: t.boolean,
})

type TodoItem = t.TypeOf<typeof TodoItem>

const main = async () => {
  pipe(
    await getTodos(),
    t.array(TodoItem).decode,
    E.match(
      (left) => console.error(`An error occurred: ${failure(left)}`),
      (rightValue) =>
        console.info(
          `successfully decoded an array of ${rightValue.length} TodoItems`,
        ),
    ),
  )
}

main()
