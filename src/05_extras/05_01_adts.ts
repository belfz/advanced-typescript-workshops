import { match } from 'ts-pattern'

// #region product types
type Some<T> = {
  _tag: 'Some'
  value: T
}

// auxiliary
function some<T>(value: T): Some<T> {
  return {
    _tag: 'Some',
    value,
  }
}

type None = {
  _tag: 'None'
}

// auxiliary
function none(): None {
  return {
    _tag: 'None',
  }
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

  const extracted = match<Option<number>, number>(something)
    .with({ _tag: 'Some' }, (some) => some.value)
    .with({ _tag: 'None' }, () => 0)
    .exhaustive()

  console.log(`extracted value: ${extracted}`)
}

main()
// #endregion

/**
 * read more: https://blog.softwaremill.com/algebraic-data-types-in-four-languages-858788043d4e
 * also, check out this library: https://github.com/pfgray/ts-adt
 */
