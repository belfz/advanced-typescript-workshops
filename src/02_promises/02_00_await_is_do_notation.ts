/**
 * async-await is a "do notation" ("for comprehension")
 * read more: https://gist.github.com/VictorTaelin/bc0c02b6d1fbc7e3dbae838fb1376c80
 */

const getAsyncNumber = () => Promise.resolve(42)

const incrementAsync = (x: number) => Promise.resolve(x + 1)

const doubleAsync = (x: number) => Promise.resolve(x * 2)

const compose = async () => {
  const x = await getAsyncNumber()
  const xPlusOne = await incrementAsync(x)
  const doubled = await doubleAsync(xPlusOne)
  return `result is ${doubled}`
}

// #region main
const main = async () => {
  console.log(await compose())
}

main()
// #endregion
