/**
 * Similarly to Scala's Future[T], Promise<T> is eager by default,
 * in contrast to effect types (more about it later).
 */
const asyncNumber = Promise.resolve(3)

/**
 * Promise<T> doesn't carry an information about the error channel.
 */
const doThingAsync = (): Promise<number> => Promise.resolve(42)

// #region misleading then
/**
 * Promise's API can feel misleading.
 * `.then()` behaves both like `.map()` and like `.flatMap()` at the same time!
 */
const thenable = () => {
  const incremented = doThingAsync().then((result) => result + 1)

  const alsoIncremented = doThingAsync().then((result) =>
    Promise.resolve(result + 1),
  )
}
// #endregion
