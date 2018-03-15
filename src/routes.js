import App from './App'
import Home from 'containers/Home/Home'
import ClientConverter from 'containers/ClientConverter/Loadable'
import { NotFound } from 'components'

export default [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/clientconverter', component: ClientConverter },
      { component: NotFound }
    ]
  }
]
