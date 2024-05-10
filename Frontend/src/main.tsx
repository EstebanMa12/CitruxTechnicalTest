
import ReactDOM from 'react-dom/client'
import AppRouter from './router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './main.sass'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
)
