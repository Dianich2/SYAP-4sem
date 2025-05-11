import { Provider } from 'react-redux'
import './App.css'
import store from './app/store'
import Posts from './features/posts/Posts'

function App() {

  return (
    <Provider store={store}>
      <Posts></Posts>
    </Provider>
  )
}

export default App
