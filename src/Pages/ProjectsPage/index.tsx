import { WrapperPages } from '../../components/WrapperPages'
import { Message } from '../../components/Message'
import { useLocation } from 'react-router-dom'

interface ILocation {
  message: string
  type: string
}

export function ProjectPage () {
  const location = useLocation()

  const state = location.state as ILocation

  return (
    <WrapperPages>
      <p>wrapper pages</p>
      {state && <Message
        message={state.message}
        sucess
      />}
    </WrapperPages>
  )
}
