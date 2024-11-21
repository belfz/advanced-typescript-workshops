import { match, P } from 'ts-pattern'

/**
 * There's no language-level syntax for pattern matching.
 * However, there are libraries for that.
 */

// #region data types
type Module = 'settings' | 'profile' | 'account'

type User =
  | { role: 'admin' }
  | { role: 'advanced'; access: Module[] }
  | { role: 'basic' }
// #endregion

// #region matching
const getUser = (): User => ({ role: 'admin' })

const main = () => {
  const description = match(getUser())
    .returnType<string>()
    .with({ role: 'admin' }, () => 'admin user with root access')
    .with(
      { role: 'advanced', access: P.select() },
      (modules) => `advanced user with access granted to ${modules.join(', ')}`,
    )
    .with({ role: 'basic' }, () => 'basic user with least privilege')
    .exhaustive()

  console.log(description)
}

main()
// #endregion
