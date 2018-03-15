import memoize from 'lru-memoize'
import { createValidator, required } from 'utils/validation'

const validation = createValidator({
  conversionType: required,
  conversionValue: required
})

export default memoize(10)(validation)
