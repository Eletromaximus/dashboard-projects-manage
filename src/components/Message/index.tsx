import { useEffect, useState } from 'react'
import { MessageStyle } from './styles'

interface IMessage {
  message: string,
  sucess?: boolean
}

export function Message ({ message, sucess }: IMessage) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!message) {
      setVisible(false)
    } else {
      setVisible(true)

      const timer = setTimeout(() => {
        setVisible(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [message])
  return (
    <>
      {visible && <MessageStyle sucess={sucess} >
          {message}
        </MessageStyle>
      }
    </>
  )
}
