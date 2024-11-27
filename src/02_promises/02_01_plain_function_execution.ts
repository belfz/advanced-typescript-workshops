import { getTodos } from '../http/client'
import { isAxiosError } from 'axios'

/**
 * Let's look at the typical Promise-handling code.
 */
const main = async () => {
  try {
    /**
     * 1. Promise<any> - better use Promise<unknown>!
     *
     * We'll come back to the problem in lesson about the runtime types.
     */
    const result = await getTodos()
    console.log(result)
  } catch (err) {
    /**
     * 2. error: always of type `unknown`!
     */
    if (isAxiosError(err)) {
      console.error(`Got AxiosError: ${err.message}`)
    } else {
      console.error(`Other error: ${err}`)
    }
  }
}

main()
