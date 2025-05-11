import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
    <div>
      <Counter/>
    </div>
    </Provider>
  )
}

export default App
