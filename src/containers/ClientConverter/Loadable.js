import Loadable from 'react-loadable'
import { Loading } from 'components'

let ClientConverterLoadable = Loadable({
  loader: () => import('./ClientConverter'),
  loading: Loading
})

export default ClientConverterLoadable
