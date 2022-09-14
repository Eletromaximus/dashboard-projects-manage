import { FormAddProject } from '../../FormAddProject'
import * as S from './Styles'
export function CreateProject () {
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
        <FormAddProject />
      </S.MainStyle>
    </S.MenuStyle>

  )
}
