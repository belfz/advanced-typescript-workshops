/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * 'any' is like unfastening your seatbelts while driving 140km/h
 */
let anything: any = 42
anything = 'wat'

/**
 * - look ma, no hands!
 * - boom
 */
console.log(anything.lol)

let notSure: unknown = 'humm'
notSure = 45

/**
 * nope
 */
// console.log(notSure.nah)

// TODO work on this example
/**
 * 😵
 */
const t: number = '42' as any
