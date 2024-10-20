import { getTodos } from './http/client'
import { isAxiosError } from 'axios'

const main = async () => {
  try {
    // 1. Promise<any>
    const result = await getTodos()
    console.log(result)
  } catch (err) {
    // 2. error: unknown
    if (isAxiosError(err)) {
      console.error(`AxiosError: ${err.message}`)
    } else {
      console.error(`Other error: ${err}`)
    }
  }
}

main()
