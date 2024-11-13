/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * 'any' vs 'unknown' - a reminder.
 */

// #region any
{
  /**
   * 'any' is like unfastening your seatbelts while driving 140km/h
   */
  let anything: any = 42
  anything = 'wat'

  /**
   * bad!
   */
  console.log(anything.lol)

  /**
   * also bad!
   */
  const t: boolean = anything
}
// #endregion

// #region unknown
{
  let notSure: unknown = 'humm'
  notSure = 45

  /**
   * we're safe!
   * uncomment any of the lines of code below to see that TypeScript complains.
   */
  // console.log(notSure.nah)
  // const y: boolean = notSure
}
// #endregion
