import { Routes, Route } from 'react-router-dom'
import { CreateProject } from './Pages/CreateProject'
import { HomePage } from './Pages/HomePage'

function App () {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/create' element={<CreateProject />} />
    </Routes>
  )
}

export default App
