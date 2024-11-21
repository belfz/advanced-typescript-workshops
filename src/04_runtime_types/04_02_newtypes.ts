import { type Newtype, iso } from 'newtype-ts'

interface EUR extends Newtype<{ readonly EUR: unique symbol }, number> {}
interface USD extends Newtype<{ readonly USD: unique symbol }, number> {}

const isoEUR = iso<EUR>()
const isoUSD = iso<USD>()

const eurAmount = isoEUR.wrap(12.5)
const usdAmount = isoUSD.wrap(6.47)

function saveAmount(eur: EUR) {
  console.log(`saved ${eur} EUR`)
}

saveAmount(eurAmount)
// illegal!
// saveAmount(usdAmount)
