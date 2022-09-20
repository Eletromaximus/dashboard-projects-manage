import { Link } from 'react-router-dom'
import * as S from './Styles'

export function HomePage () {
  return (
    <S.MenuStyle>
      <S.HeaderStyle>
        <h1 style={{
          color: 'whitesmoke'
        }}>
          Gerenciador de projetos
        </h1>
      </S.HeaderStyle>

      <S.MainStyle>
        <h1>Meus Projetos</h1>

        <S.LinkButton>
          <Link to='create'>
            <h4>Criar Projeto</h4>
          </Link>
        </S.LinkButton>
      </S.MainStyle>
    </S.MenuStyle>

  )
}
