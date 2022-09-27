import { Link } from 'react-router-dom'
import { WrapperPages } from '../../components/WrapperPages'
import * as S from './Styles'

export function HomePage () {
  return (

  <WrapperPages>
    <S.MainStyle>
      <h1>Meus Projetos</h1>

      <S.LinkButton>
        <Link to='create'>
          <h4>Criar Projeto</h4>
        </Link>
      </S.LinkButton>
    </S.MainStyle>
  </WrapperPages>

  )
}
