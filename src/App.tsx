import { Routes, Route } from 'react-router-dom'
import { CreateProject } from './Pages/CreateProject'
import { HomePage } from './Pages/HomePage'
import { ProjectPage } from './Pages/ProjectsPage'

function App () {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/create' element={<CreateProject />} />
      <Route path='/projects' element={<ProjectPage />} />
    </Routes>
  )
}

export default App
