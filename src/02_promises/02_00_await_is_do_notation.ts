/**
 * async-await is a "do notation" ("for comprehension")
 * read more: https://gist.github.com/VictorTaelin/bc0c02b6d1fbc7e3dbae838fb1376c80
 */

const getAsyncNumber = () => Promise.resolve(42)

const incrementAsync = (x: number) => Promise.resolve(x + 1)

const doubleAsync = (x: number) => Promise.resolve(x * 2)

const composeThen = () =>
  getAsyncNumber()
    .then((x) => incrementAsync(x))
    .then((xPlusOne) => doubleAsync(xPlusOne))
    .then((doubled) => `result is ${doubled}`)

// #region async/await
const composeAsyncAwait = async () => {
  const x = await getAsyncNumber()
  const xPlusOne = await incrementAsync(x)
  const doubled = await doubleAsync(xPlusOne)
  return `result is ${doubled}`
}
// #endregion

// #region main
const main = async () => {
  console.log(await composeAsyncAwait())
}

main()
// #endregion
