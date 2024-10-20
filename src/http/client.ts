import ky from 'ky'

const API_ROOT = 'https://jsonplaceholder.typicode.com'

// 1. Promise<unknown>
// 2. what is 'unknown' type? how is it different from 'any'?
export const getTodos = () => ky.get(`${API_ROOT}/todos`).json()
