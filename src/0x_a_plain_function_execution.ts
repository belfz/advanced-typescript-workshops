import { getTodos } from './http/client'
import { HTTPError } from 'ky'

try {
  // 1. Promise<unknown>
  const result = await getTodos()
  console.log(result)
} catch (err) {
  // 2. error: unknown
  if (err instanceof HTTPError) {
    console.error(`whoops: ${err.message}`)
  }
}
