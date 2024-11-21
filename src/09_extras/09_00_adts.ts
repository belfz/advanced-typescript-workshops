// #region product types
class Some<T> {
  _tag = 'Some'
  constructor(public value: T) {}
}

// auxiliary
function some<T>(value: T) {
  return new Some(value)
}

class None {
  _tag = 'None'
}

// auxiliary
function none<T>() {
  return new None()
}
// #endregion

/**
 * An example of an ADT (Algebraic Data Type) - sum type (union), generic over 1 argument.
 *
 * Disclaimer: this is NOT a full implementation of the popular `Option<T>` type - don't use it :)
 */
type Option<T> = None | Some<T>

// #region main
const main = () => {
  const something: Option<number> = some(42)
  const nothing: Option<number> = none()
}

main()
// #endregion

/**
 * read more: https://blog.softwaremill.com/algebraic-data-types-in-four-languages-858788043d4e
 * also, check out this library: https://github.com/pfgray/ts-adt
 */
