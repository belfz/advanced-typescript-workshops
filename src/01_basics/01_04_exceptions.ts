/**
 * TS/JS exceptions (errors) are unchecked.
 */

// #region unchecked exceptions and unknown errors
const divide = (a: number, b: number) => {
  if (b === 0) {
    throw new Error('cannot divide by zero!')
  }

  return a / b
}

/**
 * Moreover, the error in `catch` clause of `try/catch` block are always typed as `unknown`.
 */
const run = () => {
  try {
    divide(5, 0)
  } catch (err) {
    // err is of type `unknown`
    console.error(`oh no, an error: ${err}`)
  }
}

// run()
// #endregion

// #region throw anything
/**
 * anything can be thrown - not only Error(s)
 */
const divideOrThrowSomething = (a: number, b: number) => {
  if (b === 0) {
    throw 42
  }

  return a / b
}

const runWithWeirdThrow = () => {
  try {
    divideOrThrowSomething(5, 0)
  } catch (err) {
    // again - err is of type `unknown`
    console.error(`oh no, what this time? ${err}`)
  }
}

// runWithWeirdThrow()
// #endregion
