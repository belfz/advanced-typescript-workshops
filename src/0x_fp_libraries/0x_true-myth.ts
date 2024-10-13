import { Maybe, Result } from 'true-myth';
import { DivisionByZeroError } from './errors';

// #region maybe
const maybeNumber = Maybe.of(42);

const maybeNot = Maybe.of<number>(undefined);

const value = maybeNumber
    .andThen(first =>
        maybeNot.map(second => first + second)
    )
    .unwrapOr(0);
// #endregion

// #region result
const divide = (first: number, second: number): Result<number, DivisionByZeroError> =>
    second === 0 ? Result.err(new DivisionByZeroError()) : Result.ok(first/second)

const correctDivision = divide(10, 2);
const inccorrectDivision = divide(10, 0);
// #endregion

// #region main
const main = () => {
    console.log(`value from Maybe: ${value}`);
};
  
main();
// #endregion
