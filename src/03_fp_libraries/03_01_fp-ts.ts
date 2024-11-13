import { DivisionByZeroError } from './errors'
import * as E from 'fp-ts/Either'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

/**
 * fp-ts is a very sophisticated library for functional programming with TypeScript.
 * Besides basics, it provides a plethora of advanced operators, types, stacked monads,
 * transformers etc. It is also interoperable with io-ts, a runtime types library (more about it
 * in the next section).
 *
 * https://github.com/gcanti/fp-ts
 */

// #region option
const numOption = O.of(42)
const emptyOption: O.Option<number> = O.fromNullable(undefined)

const value = pipe(
  numOption,
  O.flatMap((first) =>
    pipe(
      emptyOption,
      O.map((second) => first + second),
    ),
  ),
  O.getOrElse(() => 0),
)
// #endregion

// #region result
const divide = (
  first: number,
  second: number,
): E.Either<DivisionByZeroError, number> =>
  second === 0 ? E.left(new DivisionByZeroError()) : E.right(first / second)

const correctDivision = divide(10, 2)
const inccorrectDivision = divide(10, 0)
// #endregion

// #region main
const main = () => {
  console.log(`value from Maybe: ${value}`)
}

main()
// #endregion
