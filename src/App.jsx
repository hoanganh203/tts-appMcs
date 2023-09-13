
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routers'
import { Provider, teamsTheme } from '@fluentui/react-northstar'

function App() {
  return (
    <Provider theme ={teamsTheme}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>)
}

export default App
