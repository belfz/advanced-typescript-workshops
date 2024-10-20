import axios from 'axios'

const API_ROOT = 'https://jsonplaceholder.typicode.com'

// 1. Promise<any> - why is it a good idea? why Promise<unknown> would be better in that case?
// 2. what is 'unknown' type? how is it different from 'any'?
export const getTodos = async () => {
  const { data } = await axios.get(`${API_ROOT}/todos`)
  return data
}
