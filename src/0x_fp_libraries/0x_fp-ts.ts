import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';
import { DivisionByZeroError } from './errors';

// #region maybe
const maybeNumber = O.of(42);

const maybeNot: O.Option<number> = O.fromNullable(undefined);

const value = pipe(
    maybeNumber,
    O.flatMap(first => 
        pipe(
            maybeNot,
            O.map(second => first + second)
        )
    ),
    O.getOrElse(() => 0)
)
// #endregion

// #region result
const divide = (first: number, second: number): E.Either<DivisionByZeroError, number> =>
    second === 0 ? E.left(new DivisionByZeroError()) : E.right(first/second)

const correctDivision = divide(10, 2);
const inccorrectDivision = divide(10, 0);
// #endregion

// #region main
const main = () => {
    console.log(`value from Maybe: ${value}`)
};
  
main();
// #endregion
