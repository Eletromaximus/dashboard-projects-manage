import { ReactNode } from 'react'
import * as S from './styles'

interface IWrapperPages {
  children: ReactNode
}

export function WrapperPages ({ children }: IWrapperPages) {
  return (
    <S.MenuStyle>
      <S.HeaderStyle>
        <h1>
          Gerenciador de projetos
        </h1>
      </S.HeaderStyle>

      {children}
    </S.MenuStyle>
  )
}
