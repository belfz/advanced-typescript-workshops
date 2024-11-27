/**
 * with languages like Haskell, it's easy to encode Higher Kinded Types e. g. Functor:
 * ```
 * class Functor (f :: Type -> Type) where
 *   fmap :: (a -> b) -> f a -> f b
 * ```
 * (source: https://hackage.haskell.org/package/base-4.20.0.1/docs/Data-Functor.html)
 *
 *
 * or Scala:
 * ```
 * trait Functor[F[_]] {
 *   def map[A, B](fa: F[A])(f: A => B): F[B]
 * }
 * ```
 * (source: https://typelevel.org/cats/typeclasses/functor.html)
 *
 *
 * There are no Higher-Kinded Types (HKTs) in TypeScript.
 * "Imaginary syntax" (NOT VALID TypeScript) could look like the following:
 * ```
 * interface Functor<F<~>> {
 *   readonly map: <A, B>(self: F<A>, f: (a: A) => B) => F<B>
 * }
 * ```
 * (credit & inspiration: https://dev.to/effect/encoding-of-hkts-in-typescript-5c3)
 *
 *
 * summary: it's not possible to encode HKTs with TypeScript (at least as of 2024 and TypeScript 5.6.3).
 * It's also unlikely to be possible in the future. In consequence, common methods like `map`, `flatMap`
 * need to be implemented separately ("from the ground up") for every type, e. g. for `Option` or `Either`
 * with libraries like fp-ts or true-myth.
 */
