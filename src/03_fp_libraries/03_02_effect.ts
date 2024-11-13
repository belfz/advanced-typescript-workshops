// https://effect.website/
import { Effect } from 'effect'

/**
 * Effect<Success, Error, Requirements>
 * or in short:
 * Effect<A, E, R>
 *
 * inspired by ZIO[R, E, A] (Scala)
 *
 * analogous to fp-ts:
 * ReaderTaskEither<R, E, A>
 */

const getNumberEffect = () => Effect.succeed(42)

const increment = (x: number) => Effect.succeed(x + 1)

const double = (x: number) => Effect.succeed(x * 2)

const program = Effect.gen(function* () {
  const x = yield* getNumberEffect()
  const xPlusOne = yield* increment(x)
  const doubled = yield* double(xPlusOne)
  return `result is ${doubled}`
})

Effect.runPromise(program).then(console.log)
